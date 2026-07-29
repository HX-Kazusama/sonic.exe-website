history.scrollRestoration = 'manual';
window.scrollTo(0, 0);


(function() {
  const screen = document.getElementById('warningScreen');
  let pendingUrl = null;

  document.querySelector('a.dl-card[href*="gamejolt"]').addEventListener('click', function(e) {
    e.preventDefault();
    pendingUrl = this.href;
    screen.classList.add('visible');
  });

  document.getElementById('warnYes').addEventListener('click', () => {
    screen.classList.remove('visible');
    if (pendingUrl) window.open(pendingUrl, '_blank', 'noopener');
    pendingUrl = null;
  });

  document.getElementById('warnNo').addEventListener('click', () => {
    screen.classList.remove('visible');
    pendingUrl = null;
  });
})();

document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = document.getElementById(btn.dataset.target);
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
  });
});

(function() {
  const slides = [
    'slidfes/fnfpe-rudm-screenshot-1779575905-8dyczabu.png',
    'slidfes/fnfpe-rudm-screenshot-1779575963-6vzuvmde.png',
    'slidfes/fnfpe-rudm-screenshot-1779576064-zxr2rzme.png',
    'slidfes/fnfpe-rudm-screenshot-1779576170-nsit9ki4.png',
    'slidfes/fnfpe-rudm-screenshot-1779576334-qfuwjm3i.png',
    'slidfes/fnfpe-rudm-screenshot-1779576411-bssswfdh.png',
    'slidfes/fnfpe-rudm-screenshot-1779576525-e6vtawz9.png',
    'slidfes/fnfpe-rudm-screenshot-1779576621-vtwdx8ya.png',
    'slidfes/fnfpe-rudm-screenshot-1779576693-hwurf4nb.png',
    'slidfes/fnfpe-rudm-screenshot-1779576839-4m2vmc8t.png',
  ];
  const container = document.querySelector('.about-slideshow');
  const imgA = document.createElement('img');
  const imgB = document.createElement('img');
  container.innerHTML = '';
  container.appendChild(imgA);
  container.appendChild(imgB);

  let idx = 0;
  let active = imgA;
  let next = imgB;

  function showSlide(i) {
    next.src = slides[i % slides.length];
    next.classList.remove('active', 'prev');
    void next.offsetWidth;
    next.classList.add('active');
    active.classList.remove('active');
    active.classList.add('prev');
    [active, next] = [next, active];
    idx++;
  }

  imgA.src = slides[0];
  imgA.classList.add('active');
  idx = 1;

  setInterval(() => showSlide(idx), 3500);
})();

document.querySelector('.hero-bg').style.backgroundImage = "radial-gradient(ellipse at 50% 40%, rgba(150,0,0,0.25) 0%, transparent 70%), url('banner/tooslow.png')";

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

function closeMenu() { mobileMenu.classList.remove('open'); }

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--red2)' : '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.char-card, .song-card, .dl-card, .credit-card, .about-grid')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

(function() {
  const credits = [
    { name: "Treno",            role: "Lead Director, Artist and Animator",          url: "https://www.youtube.com/@treno7178" },
    { name: "MeDicenKay",       role: "Director, Composer, Charter and Voice Actor", url: "https://www.youtube.com/@MeDicenKay" },
    { name: "KivFLP",           role: "Director and Composer",                       url: "https://www.youtube.com/@Kiv_FLP" },
    { name: "Dudu",             role: "Main Coder and Charter",                      url: "https://www.youtube.com/@dudugd20" },
    { name: "KrazyKazu",        role: "Coder",                                       url: null },
    { name: "Raimbowcore12",    role: "Coder and Charter",                           url: "https://www.youtube.com/@raimbowcore12" },
    { name: "AssmanBruh",       role: "Coder",                                       url: "https://www.youtube.com/@assmanbruh" },
    { name: "CherryLemur",      role: "Coder",                                       url: "https://youtube.com/@thesillysoniava" },
    { name: "Kophy232",         role: "Coder",                                       url: "https://www.youtube.com/@kophy232" },
    { name: "Wolfie",           role: "Coder and Charter",                           url: "https://www.youtube.com/@Wolfie_1985" },
    { name: "MaysLastPlay",     role: "Mobile Coder",                                url: "https://www.youtube.com/channel/UCx0LxtFR8ROd9sFAq-UxDfw" },
    { name: "Snorby",           role: "Coder",                                       url: "https://www.youtube.com/@JustWeNice" },
    { name: "HyperDream",       role: "Artist",                                      url: "https://youtube.com/@hyperisdreaming" },
    { name: "Engineer",         role: "Artist",                                      url: "https://www.youtube.com/@engineer-vc2zw" },
    { name: "Artisus",          role: "Artist",                                      url: "https://www.youtube.com/@Artless-f2y" },
    { name: "CM_drawe",         role: "Artist",                                      url: "https://x.com/CM_drawe" },
    { name: "BarcoBasurero",    role: "Artist",                                      url: "https://youtube.com/@barcobasurerow" },
    { name: "Sebas1554",        role: "Artist and Animator",                         url: "https://x.com/LG090297" },
    { name: "VN2",              role: "Artist",                                      url: "https://x.com/Art_VN2" },
    { name: "Mariano",          role: "Artist",                                      url: "https://youtube.com/@mar-z6b5k" },
    { name: "Kostya Hernandez", role: "Artist and 3D Artist",                        url: "https://x.com/HernandezKostya" },
    { name: "Tomasero",         role: "Artist, Animator and Charter",                url: "https://www.youtube.com/@eltomasero3367" },
    { name: "Pekoso",           role: "Artist",                                      url: "https://x.com/Pekoso_72" },
    { name: "Fare.dz",          role: "Artist",                                      url: "https://x.com/niggstress21" },
    { name: "Suonima",          role: "Artist",                                      url: "https://www.x.com/SuonimaG_" },
    { name: "johnwindowsxp",    role: "3D Artist",                                   url: "https://www.youtube.com/@johwindoesxp" },
    { name: "Nebros",           role: "Animator and 3D Artist",                      url: "https://x.com/ebrosBM" },
    { name: "RoxasWhite_",      role: "Pixel Artist",                                url: "https://youtube.com/@whiteroxas_" },
    { name: "Sr. Kleynner",     role: "Pixel Artist",                                url: "https://youtube.com/@srkleynner" },
    { name: "T4co",             role: "Pixel Artist",                                url: "https://www.youtube.com/@lithium5356" },
    { name: "SlaxPe",           role: "Pixel Artist",                                url: "https://www.youtube.com/@SlaxBy2010" },
    { name: "ExeTh3F4k3d",      role: "Composer",                                    url: "https://youtube.com/@exethefaker" },
    { name: "DaRealT0bi",       role: "Composer",                                    url: "https://www.youtube.com/@MxdT0biMain" },
    { name: "LifeyTheRay",      role: "Composer",                                    url: "https://www.youtube.com/@Lifeylmao" },
    { name: "KraimYT",          role: "Composer",                                    url: null },
    { name: "DX Black Fire",    role: "Composer",                                    url: "https://www.youtube.com/@DXBlackFirelol" },
    { name: "LyricalMaxi",      role: "Composer",                                    url: "https://www.youtube.com/@lyricalmaxi" },
    { name: "rak",              role: "Composer",                                    url: "https://youtube.com/@rakeishon" },
    { name: "Rogtary",          role: "Composer",                                    url: "https://youtube.com/@rogtarymusic" },
    { name: "Ryan2511Pro",      role: "Composer",                                    url: "https://www.youtube.com/@ryan2511pro" },
    { name: "Tomis Turbando",   role: "Composer",                                    url: "https://youtube.com/@tomisturbando" },
    { name: "Sanko",            role: "Composer",                                    url: "https://youtube.com/@sanko89858" },
    { name: "Alex_Hamud",       role: "Composer and Voice Actor",                    url: "https://www.youtube.com/@Alex_Hamud" },
    { name: "PolloRostizado",   role: "Main Charter",                                url: "https://youtube.com/@ronmcbonbon5660" },
    { name: "Sr. EspantaViejas",role: "Charter",                                     url: "https://x.com/EspantaViejas97" },
    { name: "sevulda",          role: "Charter",                                     url: "https://x.com/Sevulda230" },
    { name: "LuisukeDestroyer", role: "Voice Actor",                                 url: "https://www.youtube.com/@LuisukeDestroyer" },
  ];

  const grid = document.getElementById('creditsGrid');
  credits.forEach(c => {
    const card = document.createElement(c.url ? 'a' : 'div');
    card.className = 'credit-card fade-in';
    if (c.url) {
      card.href = c.url;
      card.target = '_blank';
      card.rel = 'noopener';
      card.style.cursor = 'pointer';
    }
    card.innerHTML = `<div class="credit-name">${c.name}</div><div class="credit-role">${c.role}</div>`;
    grid.appendChild(card);
    observer.observe(card);
  });
})();

const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

(function() {
  const TROPHY_MAP = {
    finale: 303858, hyper: 303859, super: 303860, rings: 303861,
    die: 303863, xeno: 303864, fleetway: 303865, fun: 303866,
    tailsdoll: 303867, chaotix: 303868, lordx: 303870, majin: 303871,
    rerun: 303872, needlemouse: 303873, sanic: 303875, omw: 303876,
    soink: 303880, ugly: 303881, devoid: 303883, sunky: 303884,
    fatal: 303885, starved: 303886, educator: 303887,
    coldsteel: 303890, genesys: 303891, fileextensions: 303892,
    demogri: 303893, scorched: 303894, secondary: 303895, exe: 303896,
    bratwurst: 303897, crazy: 303898, sega: 303899, norings: 303901,
    tripledeaths: 303902, shocks: 303903, music: 303904, parallax: 303905,
  };

  const trophyToInternal = {};
  for (const [k, v] of Object.entries(TROPHY_MAP)) trophyToInternal[v] = k;

  const cards = document.querySelectorAll('#achieveGrid .char-card');

  cards.forEach(card => {
    const img = card.querySelector('img');
    const span = card.querySelector('span');
    card.dataset.realSrc  = img.src;
    card.dataset.realName = span.textContent;
    img.src = 'sprites/achievements/locked.webp';
    span.textContent = '???';
    card.classList.add('locked');
  });

  function applyTrophies(trophyIds) {
    cards.forEach(card => {
      const internalId = card.dataset.id;
      if (!internalId) return;
      const gjId = TROPHY_MAP[internalId];
      const img  = card.querySelector('img');
      const span = card.querySelector('span');
      if (gjId && trophyIds.includes(gjId)) {
        img.src = card.dataset.realSrc;
        span.textContent = card.dataset.realName;
        card.classList.add('unlocked');
        card.classList.remove('locked');
      } else {
        img.src = 'sprites/achievements/locked.webp';
        span.textContent = '???';
        card.classList.add('locked');
        card.classList.remove('unlocked');
      }
    });
  }

  function resetCards() {
    cards.forEach(card => {
      const img  = card.querySelector('img');
      const span = card.querySelector('span');
      img.src = 'sprites/achievements/locked.webp';
      span.textContent = '???';
      card.classList.add('locked');
      card.classList.remove('unlocked');
    });
  }

  function setStatus(msg) {
    document.getElementById('gjStatus').textContent = msg;
  }

  function showConnected(username) {
    document.getElementById('gjLogin').style.display = 'none';
    document.getElementById('gjConnected').style.display = 'flex';
    document.getElementById('gjUser').textContent = '● ' + username.toUpperCase();
  }

  function showLogin() {
    document.getElementById('gjLogin').style.display = 'block';
    document.getElementById('gjConnected').style.display = 'none';
    resetCards();
    setStatus('');
  }

  async function fetchTrophies(username, token) {
    setStatus('Connecting...');
    try {
      const res  = await fetch(`/.netlify/functions/trophies?username=${encodeURIComponent(username)}&token=${encodeURIComponent(token)}`);
      const data = await res.json();
      if (!res.ok) { setStatus(data.error || 'Error'); return false; }
      applyTrophies(data.trophyIds);
      setStatus(`${data.trophyIds.length} trophies unlocked`);
      return true;
    } catch {
      setStatus('Connection failed');
      return false;
    }
  }

  const saved = JSON.parse(localStorage.getItem('gjSession') || 'null');
  if (saved) {
    fetchTrophies(saved.username, saved.token).then(ok => {
      if (ok) showConnected(saved.username);
      else localStorage.removeItem('gjSession');
    });
  }

  document.getElementById('gjSubmit').addEventListener('click', async () => {
    const username = document.getElementById('gjUsername').value.trim();
    const token    = document.getElementById('gjToken').value.trim();
    if (!username || !token) { setStatus('Enter username and token'); return; }
    const ok = await fetchTrophies(username, token);
    if (ok) {
      localStorage.setItem('gjSession', JSON.stringify({ username, token }));
      showConnected(username);
    }
  });

  document.getElementById('gjLogout').addEventListener('click', () => {
    localStorage.removeItem('gjSession');
    showLogin();
  });
})();

(function() {
  const btn    = document.getElementById('cmtSubmit');
  const status = document.getElementById('cmtStatus');

  function setStatus(msg, cls) {
    status.textContent = msg;
    status.className   = cls || '';
  }

  function getLangStrings() {
    const code = localStorage.getItem('exeLang') || 'en';
    return (window.LANGS && window.LANGS[code] && window.LANGS[code].comments) || {
      errFields: 'Enter your name and a comment.',
      sending:   'Sending...',
      ok:        'Comment sent!',
      errConn:   'Connection failed. Try again.',
    };
  }

  btn.addEventListener('click', async () => {
    const name    = document.getElementById('cmtName').value.trim();
    const message = document.getElementById('cmtMsg').value.trim();
    const T = getLangStrings();
    if (!name || !message) { setStatus(T.errFields, 'err'); return; }

    btn.disabled = true;
    setStatus(T.sending);

    try {
      const res  = await fetch('/.netlify/functions/comment', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, message }),
      });
      const data = await res.json();
      if (!res.ok) { setStatus(data.error || T.errConn, 'err'); return; }
      setStatus(T.ok, 'ok');
      document.getElementById('cmtName').value = '';
      document.getElementById('cmtMsg').value  = '';
    } catch {
      setStatus(T.errConn, 'err');
    } finally {
      btn.disabled = false;
    }
  });
})();
