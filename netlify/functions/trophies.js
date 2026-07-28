const crypto = require('crypto');

const GAME_ID     = '1055030';
const PRIVATE_KEY = process.env.GJ_PRIVATE_KEY;

function gjSign(url) {
  return crypto.createHash('md5').update(url + PRIVATE_KEY).digest('hex');
}

function gjUrl(endpoint, params) {
  const base = `https://api.gamejolt.com/api/game/v1_2${endpoint}?game_id=${GAME_ID}&${params}&format=json`;
  return `${base}&signature=${gjSign(base)}`;
}

exports.handler = async function(event) {
  const { username, token } = event.queryStringParameters || {};

  if (!username || !token)
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing username or token' }) };

  if (!PRIVATE_KEY)
    return { statusCode: 500, body: JSON.stringify({ error: 'Server misconfigured' }) };

  try {
    const url = gjUrl('/trophies/', `username=${encodeURIComponent(username)}&user_token=${encodeURIComponent(token)}&achieved=true`);
    const res  = await fetch(url);
    const data = await res.json();

    if (!data.response?.success)
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid credentials' }) };

    const trophyIds = (data.response.trophies || []).map(t => Number(t.id));

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ trophyIds }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch trophies' }) };
  }
};
