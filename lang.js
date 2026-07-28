const LANGS = {
  en: {
    name: "English", flag: "🇬🇧",
    langScreen: { title: "SELECT LANGUAGE", subtitle: "Choose your language to continue" },
    warning: { title: "WARNING!", line1: "This mod is not for children or those who are easily disturbed.", line2: "This mod contains flashing lights and/or imagery that may cause discomfort and/or seizures for those with photosensitive epilepsy.", question: "WOULD YOU LIKE TO PROCEED ANYWAY?", yes: "YES", no: "NO" },
    nav: { home: "HOME", about: "ABOUT", download: "DOWNLOAD", achievements: "ACHIEVEMENTS", updates: "UPDATES", credits: "CREDITS" },
    mobileMenu: { home: "HOME", about: "ABOUT", gallery: "GALLERY", download: "DOWNLOAD", credits: "CREDITS" },
    hero: { sub: "READY FOR ROUND 3?", download: "DOWNLOAD", achievements: "ACHIEVEMENTS" },
    about: { title: "ABOUT THE MOD", p1: "Ready to play once again...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> is a fan-made revival inspired by the iconic 2021 <span class=\"red\">Vs. Sonic.EXE</span> mod. Built to recapture the original's dark atmosphere and nostalgia, this project brings back part of the cancelled content with new reimaginations of its story, songs, and characters.", p3: "With eerie encounters, revamped visuals, and reimagined tracks, <strong>Vs Sonic.EXE (Unofficial)</strong> aims to deliver both a nostalgic and fresh experience for fans of the original mod.", f1: "50+ remade songs", f2: "20+ playable characters / opponents", f3: "Full achievement system with GameJolt trophies", f4: "Unique art & animations for every character", f5: "Multilanguage support" },
    download: { title: "DOWNLOAD", sub: "Available now", gjSpan: "Play & earn trophies", note: "This mod is a fan-made project and is not affiliated with SEGA or the original Sonic.EXE Team." },
    achievements: { title: "ACHIEVEMENTS", gjSub: "Connect your GameJolt account to see your progress", gjUserPlaceholder: "GameJolt Username", gjTokenPlaceholder: "GameJolt Token", gjConnect: "CONNECT", gjHelp: "Get your token at <span class=\"red\">gamejolt.com → Profile Menu → Game Token</span>", gjDisconnect: "DISCONNECT", gjCan: "Can you unlock them all?" },
    updates: { title: "UPDATES", sub: "WHAT'S COMING NEXT", u1: "Our first post-launch update is planned to be <strong>Version 1.5</strong>, bringing the <strong>PARALLAX</strong> cast into the mod alongside the <strong>Christmas Special</strong> songs. We'd love to make this update a reality, and we're excited to continue expanding the experience with even more content.", u2: "Looking even further ahead, <strong>Version 2</strong> is shaping up to be our biggest and most ambitious update yet. It will continue the <strong>Story Mode</strong> campaign with its second chapter, <strong>Overthrow</strong>, where you'll play as <strong>Girlfriend</strong> after she is mysteriously teleported during the Triple Trouble cutscene. Follow her journey as she faces new threats, uncovers hidden truths, and experiences the story from an entirely different perspective. This update will also introduce the remaining members of the <strong>Sound Test</strong> and <strong>File Extensions</strong> cast. Alongside new songs, mechanics, and surprises, our goal is to deliver an experience unlike anything we've created before." },
    comments: { title: "COMMENTS", sub: "Leave a message — it'll appear in our Discord", namePlaceholder: "Your name", msgPlaceholder: "Your comment...", send: "SEND", sending: "Sending...", ok: "Comment sent! Check the Discord.", errFields: "Enter your name and a comment.", errConn: "Connection failed. Try again." },
    credits: { title: "CREDITS", sub: "The team behind the mod" },
    footer: { legal1: "Fan-made FNF mod. Not affiliated with SEGA nor the Original Sonic.exe Team.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  es: {
    name: "Español", flag: "🇪🇸",
    langScreen: { title: "SELECCIONA IDIOMA", subtitle: "Elige tu idioma para continuar" },
    warning: { title: "¡ADVERTENCIA!", line1: "Este mod no es apto para niños ni personas fácilmente perturbadas.", line2: "Este mod contiene luces parpadeantes e imágenes que pueden causar malestar o convulsiones en personas con epilepsia fotosensible.", question: "¿DESEAS CONTINUAR DE TODAS FORMAS?", yes: "SÍ", no: "NO" },
    nav: { home: "INICIO", about: "ACERCA", download: "DESCARGAR", achievements: "LOGROS", updates: "ACTUALIZACIONES", credits: "CRÉDITOS" },
    mobileMenu: { home: "INICIO", about: "ACERCA", gallery: "GALERÍA", download: "DESCARGAR", credits: "CRÉDITOS" },
    hero: { sub: "¿LISTO PARA LA RONDA 3?", download: "DESCARGAR", achievements: "LOGROS" },
    about: { title: "ACERCA DEL MOD", p1: "¿Listo para jugar una vez más...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> es un revival hecho por fans inspirado en el icónico mod <span class=\"red\">Vs. Sonic.EXE</span> de 2021. Creado para capturar la oscura atmósfera y nostalgia del original, este proyecto recupera parte del contenido cancelado con nuevas reimaginaciones de su historia, canciones y personajes.", p3: "Con encuentros espeluznantes, visuales renovados y pistas reimaginadas, <strong>Vs Sonic.EXE (Unofficial)</strong> busca ofrecer una experiencia tanto nostálgica como fresca para los fans del mod original.", f1: "50+ canciones remasterizadas", f2: "20+ personajes jugables / oponentes", f3: "Sistema completo de logros con trofeos de GameJolt", f4: "Arte y animaciones únicos para cada personaje", f5: "Soporte multiidioma" },
    download: { title: "DESCARGAR", sub: "Disponible ahora", gjSpan: "Juega y gana trofeos", note: "Este mod es un proyecto hecho por fans y no está afiliado con SEGA ni con el equipo original de Sonic.EXE." },
    achievements: { title: "LOGROS", gjSub: "Conecta tu cuenta de GameJolt para ver tu progreso", gjUserPlaceholder: "Usuario de GameJolt", gjTokenPlaceholder: "Token de GameJolt", gjConnect: "CONECTAR", gjHelp: "Obtén tu token en <span class=\"red\">gamejolt.com → Menú de Perfil → Game Token</span>", gjDisconnect: "DESCONECTAR", gjCan: "¿Puedes desbloquearlos todos?" },
    updates: { title: "ACTUALIZACIONES", sub: "LO QUE VIENE", u1: "Nuestra primera actualización post-lanzamiento está planeada como <strong>Versión 1.5</strong>, trayendo al elenco de <strong>PARALLAX</strong> al mod junto con las canciones del <strong>Especial de Navidad</strong>. Nos encantaría hacer realidad esta actualización y estamos emocionados de continuar expandiendo la experiencia con más contenido.", u2: "Mirando más adelante, la <strong>Versión 2</strong> se perfila como nuestra actualización más grande y ambiciosa hasta ahora. Continuará la campaña del <strong>Modo Historia</strong> con su segundo capítulo, <strong>Overthrow</strong>, donde jugarás como <strong>Girlfriend</strong> tras ser misteriosamente teletransportada durante la cinemática de Triple Trouble. Sigue su viaje mientras enfrenta nuevas amenazas, descubre verdades ocultas y experimenta la historia desde una perspectiva completamente diferente. Esta actualización también introducirá a los miembros restantes del elenco de <strong>Sound Test</strong> y <strong>File Extensions</strong>. Con nuevas canciones, mecánicas y sorpresas, nuestro objetivo es ofrecer una experiencia como ninguna que hayamos creado antes." },
    comments: { title: "COMENTARIOS", sub: "Deja un mensaje — aparecerá en nuestro Discord", namePlaceholder: "Tu nombre", msgPlaceholder: "Tu comentario...", send: "ENVIAR", sending: "Enviando...", ok: "¡Comentario enviado! Revisa el Discord.", errFields: "Ingresa tu nombre y un comentario.", errConn: "Conexión fallida. Intenta de nuevo." },
    credits: { title: "CRÉDITOS", sub: "El equipo detrás del mod" },
    footer: { legal1: "Mod FNF hecho por fans. No afiliado con SEGA ni con el Equipo Original de Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  pt: {
    name: "Português", flag: "🇧🇷",
    langScreen: { title: "SELECIONE O IDIOMA", subtitle: "Escolha seu idioma para continuar" },
    warning: { title: "AVISO!", line1: "Este mod não é adequado para crianças ou pessoas facilmente perturbadas.", line2: "Este mod contém luzes piscantes e/ou imagens que podem causar desconforto ou convulsões em pessoas com epilepsia fotossensível.", question: "DESEJA CONTINUAR MESMO ASSIM?", yes: "SIM", no: "NÃO" },
    nav: { home: "INÍCIO", about: "SOBRE", download: "BAIXAR", achievements: "CONQUISTAS", updates: "ATUALIZAÇÕES", credits: "CRÉDITOS" },
    mobileMenu: { home: "INÍCIO", about: "SOBRE", gallery: "GALERIA", download: "BAIXAR", credits: "CRÉDITOS" },
    hero: { sub: "PRONTO PARA A RODADA 3?", download: "BAIXAR", achievements: "CONQUISTAS" },
    about: { title: "SOBRE O MOD", p1: "Pronto para jogar mais uma vez...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> é um revival feito por fãs inspirado no icônico mod <span class=\"red\">Vs. Sonic.EXE</span> de 2021. Criado para resgatar a atmosfera sombria e a nostalgia do original, este projeto traz de volta parte do conteúdo cancelado com novas reimaginações de sua história, músicas e personagens.", p3: "Com encontros sinistros, visuais reformulados e faixas reimaginadas, <strong>Vs Sonic.EXE (Unofficial)</strong> busca oferecer uma experiência nostálgica e nova para os fãs do mod original.", f1: "50+ músicas refeitas", f2: "20+ personagens jogáveis / oponentes", f3: "Sistema completo de conquistas com troféus do GameJolt", f4: "Arte e animações únicas para cada personagem", f5: "Suporte a múltiplos idiomas" },
    download: { title: "BAIXAR", sub: "Disponível agora", gjSpan: "Jogue e ganhe troféus", note: "Este mod é um projeto feito por fãs e não é afiliado à SEGA nem à equipe original do Sonic.EXE." },
    achievements: { title: "CONQUISTAS", gjSub: "Conecte sua conta do GameJolt para ver seu progresso", gjUserPlaceholder: "Usuário do GameJolt", gjTokenPlaceholder: "Token do GameJolt", gjConnect: "CONECTAR", gjHelp: "Obtenha seu token em <span class=\"red\">gamejolt.com → Menu do Perfil → Game Token</span>", gjDisconnect: "DESCONECTAR", gjCan: "Você consegue desbloquear todos?" },
    updates: { title: "ATUALIZAÇÕES", sub: "O QUE VEM POR AÍ", u1: "Nossa primeira atualização pós-lançamento está planejada como <strong>Versão 1.5</strong>, trazendo o elenco de <strong>PARALLAX</strong> ao mod junto com as músicas do <strong>Especial de Natal</strong>. Adoraríamos tornar esta atualização uma realidade e estamos animados para continuar expandindo a experiência com ainda mais conteúdo.", u2: "Olhando ainda mais adiante, a <strong>Versão 2</strong> está se tornando nossa maior e mais ambiciosa atualização. Ela continuará a campanha do <strong>Modo História</strong> com seu segundo capítulo, <strong>Overthrow</strong>, onde você jogará como <strong>Girlfriend</strong> após ela ser misteriosamente teletransportada durante a cutscene de Triple Trouble. Acompanhe sua jornada enquanto ela enfrenta novas ameaças, descobre verdades ocultas e experimenta a história de uma perspectiva completamente diferente. Esta atualização também introduzirá os membros restantes do elenco de <strong>Sound Test</strong> e <strong>File Extensions</strong>. Com novas músicas, mecânicas e surpresas, nosso objetivo é oferecer uma experiência diferente de tudo que criamos antes." },
    comments: { title: "COMENTÁRIOS", sub: "Deixe uma mensagem — ela aparecerá no nosso Discord", namePlaceholder: "Seu nome", msgPlaceholder: "Seu comentário...", send: "ENVIAR", sending: "Enviando...", ok: "Comentário enviado! Confira o Discord.", errFields: "Digite seu nome e um comentário.", errConn: "Falha na conexão. Tente novamente." },
    credits: { title: "CRÉDITOS", sub: "A equipe por trás do mod" },
    footer: { legal1: "Mod FNF feito por fãs. Não afiliado à SEGA nem à Equipe Original do Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  fr: {
    name: "Français", flag: "🇫🇷",
    langScreen: { title: "CHOISIR LA LANGUE", subtitle: "Choisissez votre langue pour continuer" },
    warning: { title: "AVERTISSEMENT!", line1: "Ce mod n'est pas destiné aux enfants ou aux personnes facilement perturbées.", line2: "Ce mod contient des lumières clignotantes et/ou des images pouvant provoquer des malaises ou des convulsions chez les personnes souffrant d'épilepsie photosensible.", question: "VOULEZ-VOUS CONTINUER QUAND MÊME?", yes: "OUI", no: "NON" },
    nav: { home: "ACCUEIL", about: "À PROPOS", download: "TÉLÉCHARGER", achievements: "SUCCÈS", updates: "MISES À JOUR", credits: "CRÉDITS" },
    mobileMenu: { home: "ACCUEIL", about: "À PROPOS", gallery: "GALERIE", download: "TÉLÉCHARGER", credits: "CRÉDITS" },
    hero: { sub: "PRÊT POUR LE ROUND 3?", download: "TÉLÉCHARGER", achievements: "SUCCÈS" },
    about: { title: "À PROPOS DU MOD", p1: "Prêt à jouer encore une fois...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> est un revival fait par des fans, inspiré du célèbre mod <span class=\"red\">Vs. Sonic.EXE</span> de 2021. Conçu pour retrouver l'atmosphère sombre et la nostalgie de l'original, ce projet ressuscite une partie du contenu annulé avec de nouvelles réimaginaions de son histoire, ses chansons et ses personnages.", p3: "Avec des rencontres inquiétantes, des visuels repensés et des pistes réimaginées, <strong>Vs Sonic.EXE (Unofficial)</strong> vise à offrir une expérience à la fois nostalgique et fraîche aux fans du mod original.", f1: "50+ chansons refaites", f2: "20+ personnages jouables / adversaires", f3: "Système complet de succès avec trophées GameJolt", f4: "Art et animations uniques pour chaque personnage", f5: "Support multilingue" },
    download: { title: "TÉLÉCHARGER", sub: "Disponible maintenant", gjSpan: "Jouez et gagnez des trophées", note: "Ce mod est un projet fait par des fans et n'est pas affilié à SEGA ni à l'équipe originale de Sonic.EXE." },
    achievements: { title: "SUCCÈS", gjSub: "Connectez votre compte GameJolt pour voir votre progression", gjUserPlaceholder: "Nom d'utilisateur GameJolt", gjTokenPlaceholder: "Token GameJolt", gjConnect: "CONNECTER", gjHelp: "Obtenez votre token sur <span class=\"red\">gamejolt.com → Menu Profil → Game Token</span>", gjDisconnect: "DÉCONNECTER", gjCan: "Pouvez-vous tous les débloquer?" },
    updates: { title: "MISES À JOUR", sub: "CE QUI ARRIVE", u1: "Notre première mise à jour post-lancement est prévue comme la <strong>Version 1.5</strong>, introduisant le casting <strong>PARALLAX</strong> dans le mod ainsi que les chansons du <strong>Spécial de Noël</strong>. Nous aimerions concrétiser cette mise à jour et sommes impatients de continuer à enrichir l'expérience avec encore plus de contenu.", u2: "En regardant encore plus loin, la <strong>Version 2</strong> s'annonce comme notre mise à jour la plus grande et la plus ambitieuse. Elle continuera la campagne du <strong>Mode Histoire</strong> avec son deuxième chapitre, <strong>Overthrow</strong>, où vous jouerez en tant que <strong>Girlfriend</strong> après qu'elle soit mystérieusement téléportée lors de la cinématique de Triple Trouble. Suivez son voyage alors qu'elle fait face à de nouvelles menaces, découvre des vérités cachées et vit l'histoire d'une perspective entièrement différente. Cette mise à jour introduira également les membres restants du casting <strong>Sound Test</strong> et <strong>File Extensions</strong>. Avec de nouvelles chansons, mécaniques et surprises, notre objectif est de livrer une expérience comme aucune autre que nous avons créée." },
    comments: { title: "COMMENTAIRES", sub: "Laissez un message — il apparaîtra sur notre Discord", namePlaceholder: "Votre nom", msgPlaceholder: "Votre commentaire...", send: "ENVOYER", sending: "Envoi...", ok: "Commentaire envoyé ! Consultez le Discord.", errFields: "Entrez votre nom et un commentaire.", errConn: "Échec de connexion. Réessayez." },
    credits: { title: "CRÉDITS", sub: "L'équipe derrière le mod" },
    footer: { legal1: "Mod FNF fait par des fans. Non affilié à SEGA ni à l'équipe originale de Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  uz: {
    name: "O'zbekcha", flag: "🇺🇿",
    langScreen: { title: "TIL TANLANG", subtitle: "Davom etish uchun tilni tanlang" },
    warning: { title: "OGOHLANTIRISH!", line1: "Bu mod bolalar yoki osonlikcha bezovta bo'ladigan odamlar uchun emas.", line2: "Bu mod porlayotgan chiroqlar va/yoki fotoepilepsiyasi bo'lgan odamlarda diskomfort yoki tutqanoq keltirib chiqarishi mumkin bo'lgan tasvirlarni o'z ichiga oladi.", question: "BARIBIR DAVOM ETISHNI XOHLAYSIZMI?", yes: "HA", no: "YO'Q" },
    nav: { home: "BOSH SAHIFA", about: "HAQIDA", download: "YUKLAB OLISH", achievements: "YUTUQLAR", updates: "YANGILANISHLAR", credits: "KREDITLAR" },
    mobileMenu: { home: "BOSH SAHIFA", about: "HAQIDA", gallery: "GALEREYA", download: "YUKLAB OLISH", credits: "KREDITLAR" },
    hero: { sub: "3-RAUNDGA TAYYORMISIZ?", download: "YUKLAB OLISH", achievements: "YUTUQLAR" },
    about: { title: "MOD HAQIDA", p1: "Yana o'ynashga tayyormisiz...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> — 2021 yilgi ikonik <span class=\"red\">Vs. Sonic.EXE</span> modidan ilhomlangan muxlislar tomonidan yaratilgan revival. Originalning qorong'u atmosferasi va nostalgiyasini qayta yaratish uchun mo'ljallangan bu loyiha bekor qilingan kontentning bir qismini hikoya, qo'shiqlar va personajlarning yangi talqinlari bilan qaytaradi.", p3: "Dahshatli uchrashuvlar, yangilangan vizuallar va qayta tasavvur qilingan treklardan iborat <strong>Vs Sonic.EXE (Unofficial)</strong> asl mod muxlislariga nostaljik ham yangi tajriba taqdim etishga intiladi.", f1: "50+ qayta yaratilgan qo'shiqlar", f2: "20+ o'ynaladigan personajlar / raqiblar", f3: "GameJolt kuboklar bilan to'liq yutuq tizimi", f4: "Har bir personaj uchun noyob san'at va animatsiyalar", f5: "Ko'p tilli qo'llab-quvvatlash" },
    download: { title: "YUKLAB OLISH", sub: "Hozir mavjud", gjSpan: "O'ynang va kubok yutib oling", note: "Bu mod muxlislar tomonidan yaratilgan loyiha bo'lib, SEGA yoki asl Sonic.EXE jamoasiga tegishli emas." },
    achievements: { title: "YUTUQLAR", gjSub: "Rivojingizni ko'rish uchun GameJolt hisobingizni ulang", gjUserPlaceholder: "GameJolt foydalanuvchi nomi", gjTokenPlaceholder: "GameJolt tokeni", gjConnect: "ULASH", gjHelp: "<span class=\"red\">gamejolt.com → Profil menyusi → Game Token</span> da tokeningizni oling", gjDisconnect: "UZISH", gjCan: "Hammasini ocha olasizmi?" },
    updates: { title: "YANGILANISHLAR", sub: "KEYINGI NIMA", u1: "Bizning birinchi post-launch yangilanishimiz <strong>Versiya 1.5</strong> bo'lishi rejalashtirilgan — <strong>Rojdestvo maxsus</strong> qo'shiqlari bilan birga <strong>PARALLAX</strong> qahramonlarini modga olib keladi. Biz bu yangilanishni amalga oshirishni juda xohlaymiz va tajribani yanada ko'proq kontent bilan kengaytirishga tayyormiz.", u2: "Yanada oldinga nazar solsak, <strong>Versiya 2</strong> eng katta va ambitsiyali yangilanishimiz bo'lishga yo'l olmoqda. U <strong>Hikoya Rejimi</strong> kampaniyasini ikkinchi bob — <strong>Overthrow</strong> bilan davom ettiradi. Unda siz Triple Trouble kinosаhnasi davomida sirli tarzda teleportatsiya qilingan <strong>Girlfriend</strong> sifatida o'ynaysiz. U yangi tahdidlarga duch keladi, yashirin haqiqatlarni ochadi va voqeani butunlay boshqacha nuqtai nazardan his etadi. Bu yangilanish shuningdek <strong>Sound Test</strong> va <strong>File Extensions</strong> qolgan a'zolarini taqdim etadi. Yangi qo'shiqlar, mexanikalar va kutilmagan hodisalar bilan maqsadimiz avval hech qachon yaratmagan tajribamizni taqdim etishdir." },
    comments: { title: "IZOHLAR", sub: "Xabar qoldiring — u Discord kanalimizda paydo bo'ladi", namePlaceholder: "Ismingiz", msgPlaceholder: "Izohingiz...", send: "YUBORISH", sending: "Yuborilmoqda...", ok: "Izoh yuborildi! Discordni tekshiring.", errFields: "Ism va izoh kiriting.", errConn: "Ulanish amalga oshmadi. Qayta urining." },
    credits: { title: "KREDITLAR", sub: "Mod ortidagi jamoa" },
    footer: { legal1: "Muxlislar tomonidan yaratilgan FNF mod. SEGA yoki asl Sonic.exe jamoasiga tegishli emas.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  ja: {
    name: "日本語", flag: "🇯🇵",
    langScreen: { title: "言語を選択", subtitle: "続けるには言語を選んでください" },
    warning: { title: "警告！", line1: "このMODは子供や刺激に敏感な方には向いていません。", line2: "このMODには光の点滅や映像が含まれており、光過敏性てんかんの方に不快感や発作を引き起こす可能性があります。", question: "それでも続けますか？", yes: "はい", no: "いいえ" },
    nav: { home: "ホーム", about: "概要", download: "ダウンロード", achievements: "実績", updates: "アップデート", credits: "クレジット" },
    mobileMenu: { home: "ホーム", about: "概要", gallery: "ギャラリー", download: "ダウンロード", credits: "クレジット" },
    hero: { sub: "ラウンド3の準備はいい？", download: "ダウンロード", achievements: "実績" },
    about: { title: "MODについて", p1: "また遊ぶ準備はできた...？", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong>は、2021年の伝説的なMOD <span class=\"red\">Vs. Sonic.EXE</span> からインスピレーションを受けたファンメイドのリバイバルです。オリジナルのダークな雰囲気とノスタルジアを再現するために作られ、キャンセルされたコンテンツの一部を、新しいストーリー・楽曲・キャラクターとして甦らせました。", p3: "不気味な出会い、刷新されたビジュアル、再想像されたトラックで、<strong>Vs Sonic.EXE (Unofficial)</strong>はオリジナルMODのファンにノスタルジックかつ新鮮な体験を届けることを目指しています。", f1: "50曲以上のリメイク楽曲", f2: "20人以上のプレイアブルキャラクター/対戦相手", f3: "GameJoltトロフィーによる完全な実績システム", f4: "全キャラクター独自のアートとアニメーション", f5: "多言語対応" },
    download: { title: "ダウンロード", sub: "今すぐ利用可能", gjSpan: "プレイしてトロフィーを獲得", note: "このMODはファンメイドのプロジェクトであり、SEGAまたはオリジナルSonic.EXEチームとは一切関係ありません。" },
    achievements: { title: "実績", gjSub: "GameJoltアカウントを接続して進捗を確認", gjUserPlaceholder: "GameJoltユーザー名", gjTokenPlaceholder: "GameJoltトークン", gjConnect: "接続", gjHelp: "<span class=\"red\">gamejolt.com → プロフィールメニュー → Game Token</span> でトークンを取得してください", gjDisconnect: "切断", gjCan: "全て解除できるか？" },
    updates: { title: "アップデート", sub: "次に来るもの", u1: "最初のポストローンチアップデートは<strong>バージョン1.5</strong>として予定されており、<strong>クリスマススペシャル</strong>の楽曲とともに<strong>PARALLAX</strong>キャストをMODに追加します。このアップデートを実現したいと思っており、さらに多くのコンテンツで体験を拡張し続けることに興奮しています。", u2: "さらに先を見据えると、<strong>バージョン2</strong>はこれまでで最大かつ最も野心的なアップデートになりそうです。<strong>ストーリーモード</strong>キャンペーンの第二章<strong>Overthrow</strong>が続き、Triple Troubleのカットシーン中に謎の転送を受けた<strong>ガールフレンド</strong>としてプレイします。新たな脅威に立ち向かい、隠された真実を明らかにし、まったく異なる視点からストーリーを体験してください。このアップデートでは<strong>Sound Test</strong>と<strong>File Extensions</strong>の残りメンバーも登場します。新しい楽曲・メカニクス・サプライズとともに、これまで作ったどんなものとも異なる体験を届けることが目標です。" },
    comments: { title: "コメント", sub: "メッセージを残してください — Discordに届きます", namePlaceholder: "お名前", msgPlaceholder: "コメントを入力...", send: "送信", sending: "送信中...", ok: "コメントを送信しました！Discordをご確認ください。", errFields: "名前とコメントを入力してください。", errConn: "接続に失敗しました。もう一度お試しください。" },
    credits: { title: "クレジット", sub: "MODを作ったチーム" },
    footer: { legal1: "ファンメイドのFNF MOD。SEGAまたはオリジナルSonic.exeチームとは無関係です。", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  zh: {
    name: "中文", flag: "🇨🇳",
    langScreen: { title: "选择语言", subtitle: "请选择您的语言以继续" },
    warning: { title: "警告！", line1: "此MOD不适合儿童或容易受到惊吓的人群。", line2: "此MOD包含闪光灯效果和/或可能对光敏性癫痫患者造成不适或诱发癫痫发作的图像。", question: "您仍然想继续吗？", yes: "是", no: "否" },
    nav: { home: "主页", about: "关于", download: "下载", achievements: "成就", updates: "更新", credits: "制作人员" },
    mobileMenu: { home: "主页", about: "关于", gallery: "画廊", download: "下载", credits: "制作人员" },
    hero: { sub: "准备好第3轮了吗？", download: "下载", achievements: "成就" },
    about: { title: "关于MOD", p1: "准备好再次游玩了吗...？", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> 是一款由粉丝制作的复兴作品，灵感来自2021年标志性的 <span class=\"red\">Vs. Sonic.EXE</span> MOD。为了重现原作黑暗的氛围与怀旧感，该项目以全新的故事、歌曲和角色诠释带回了部分被取消的内容。", p3: "凭借令人毛骨悚然的相遇、焕然一新的视觉效果和重新构思的曲目，<strong>Vs Sonic.EXE (Unofficial)</strong> 致力于为原版MOD的粉丝带来兼具怀旧感与新鲜感的体验。", f1: "50首以上重制歌曲", f2: "20位以上可游玩角色/对手", f3: "配备GameJolt奖杯的完整成就系统", f4: "每个角色独特的美术与动画", f5: "多语言支持" },
    download: { title: "下载", sub: "立即可用", gjSpan: "游玩并赢取奖杯", note: "此MOD是粉丝制作的项目，与SEGA或原版Sonic.EXE团队无关联。" },
    achievements: { title: "成就", gjSub: "连接您的GameJolt账号以查看进度", gjUserPlaceholder: "GameJolt用户名", gjTokenPlaceholder: "GameJolt令牌", gjConnect: "连接", gjHelp: "在 <span class=\"red\">gamejolt.com → 个人资料菜单 → Game Token</span> 获取您的令牌", gjDisconnect: "断开连接", gjCan: "你能全部解锁吗？" },
    updates: { title: "更新", sub: "接下来的内容", u1: "我们的第一个发布后更新计划为<strong>版本1.5</strong>，将<strong>PARALLAX</strong>阵容与<strong>圣诞特别</strong>歌曲一同带入MOD。我们非常希望实现这次更新，并期待继续用更多内容丰富游戏体验。", u2: "展望更远，<strong>版本2</strong>正在成为我们迄今最大、最雄心勃勃的更新。它将延续<strong>故事模式</strong>的活动，进入第二章<strong>Overthrow</strong>——在Triple Trouble过场动画中神秘传送后，你将扮演<strong>女友</strong>。跟随她的旅程，面对新的威胁，揭开隐藏的真相，以全新视角体验故事。此次更新还将引入<strong>Sound Test</strong>和<strong>File Extensions</strong>阵容的剩余成员。伴随着新歌曲、新机制和惊喜，我们的目标是带来前所未有的独特体验。" },
    comments: { title: "评论", sub: "留言 — 将出现在我们的Discord中", namePlaceholder: "您的名字", msgPlaceholder: "您的评论...", send: "发送", sending: "发送中...", ok: "评论已发送！请查看Discord。", errFields: "请输入您的名字和评论。", errConn: "连接失败。请重试。" },
    credits: { title: "制作人员", sub: "MOD背后的团队" },
    footer: { legal1: "粉丝制作的FNF MOD。与SEGA或原版Sonic.exe团队无关联。", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  ko: {
    name: "한국어", flag: "🇰🇷",
    langScreen: { title: "언어 선택", subtitle: "계속하려면 언어를 선택하세요" },
    warning: { title: "경고!", line1: "이 모드는 어린이나 쉽게 놀라는 분들에게 적합하지 않습니다.", line2: "이 모드에는 광과민성 간질이 있는 분들에게 불편함이나 발작을 유발할 수 있는 점멸 조명 및/또는 이미지가 포함되어 있습니다.", question: "그래도 계속하시겠습니까?", yes: "예", no: "아니오" },
    nav: { home: "홈", about: "소개", download: "다운로드", achievements: "업적", updates: "업데이트", credits: "크레딧" },
    mobileMenu: { home: "홈", about: "소개", gallery: "갤러리", download: "다운로드", credits: "크레딧" },
    hero: { sub: "라운드 3 준비됐나요?", download: "다운로드", achievements: "업적" },
    about: { title: "모드 소개", p1: "다시 플레이할 준비가 됐나요...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong>은 2021년의 상징적인 <span class=\"red\">Vs. Sonic.EXE</span> 모드에서 영감을 받은 팬메이드 리바이벌입니다. 원작의 어두운 분위기와 향수를 재현하기 위해 만들어졌으며, 취소된 콘텐츠의 일부를 새로운 스토리, 곡, 캐릭터로 재해석하여 되살렸습니다.", p3: "으스스한 만남, 새롭게 단장된 비주얼, 재구성된 트랙으로 <strong>Vs Sonic.EXE (Unofficial)</strong>은 원작 모드 팬들에게 향수와 신선함을 동시에 선사하는 경험을 목표로 합니다.", f1: "50곡 이상 리메이크 음악", f2: "20명 이상의 플레이어블 캐릭터 / 상대방", f3: "GameJolt 트로피를 포함한 완전한 업적 시스템", f4: "모든 캐릭터마다 독자적인 아트 및 애니메이션", f5: "다국어 지원" },
    download: { title: "다운로드", sub: "지금 바로 이용 가능", gjSpan: "플레이하고 트로피 획득하기", note: "이 모드는 팬메이드 프로젝트로 SEGA 또는 원작 Sonic.EXE 팀과 관련이 없습니다." },
    achievements: { title: "업적", gjSub: "GameJolt 계정을 연결하여 진행상황 확인", gjUserPlaceholder: "GameJolt 사용자명", gjTokenPlaceholder: "GameJolt 토큰", gjConnect: "연결", gjHelp: "<span class=\"red\">gamejolt.com → 프로필 메뉴 → Game Token</span>에서 토큰을 받으세요", gjDisconnect: "연결 해제", gjCan: "모두 잠금 해제할 수 있나요?" },
    updates: { title: "업데이트", sub: "다음에 올 것들", u1: "출시 후 첫 번째 업데이트는 <strong>버전 1.5</strong>로 계획되어 있으며, <strong>크리스마스 스페셜</strong> 곡들과 함께 <strong>PARALLAX</strong> 캐스트를 모드에 추가합니다. 이 업데이트가 실현되기를 진심으로 바라며, 더 많은 콘텐츠로 경험을 계속 확장해 나가겠습니다.", u2: "더 먼 미래를 보면, <strong>버전 2</strong>는 지금까지 중 가장 크고 야심 찬 업데이트가 될 것입니다. <strong>스토리 모드</strong> 캠페인의 두 번째 챕터 <strong>Overthrow</strong>가 이어지며, Triple Trouble 컷신 중 신비롭게 텔레포트된 <strong>Girlfriend</strong>로 플레이합니다. 새로운 위협에 맞서고, 숨겨진 진실을 밝히며, 완전히 다른 시각으로 스토리를 경험해보세요. 이번 업데이트에서는 <strong>Sound Test</strong>와 <strong>File Extensions</strong>의 나머지 멤버들도 소개됩니다. 새로운 노래, 메커니즘, 그리고 놀라움과 함께, 우리가 지금까지 만든 것과는 전혀 다른 경험을 선사하는 것이 목표입니다." },
    comments: { title: "댓글", sub: "메시지를 남겨주세요 — Discord에 표시됩니다", namePlaceholder: "이름", msgPlaceholder: "댓글을 입력하세요...", send: "전송", sending: "전송 중...", ok: "댓글이 전송되었습니다! Discord를 확인하세요.", errFields: "이름과 댓글을 입력해주세요.", errConn: "연결에 실패했습니다. 다시 시도해주세요." },
    credits: { title: "크레딧", sub: "모드를 만든 팀" },
    footer: { legal1: "팬메이드 FNF 모드. SEGA 또는 원작 Sonic.exe 팀과 관련 없음.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  ru: {
    name: "Русский", flag: "🇷🇺",
    langScreen: { title: "ВЫБЕРИТЕ ЯЗЫК", subtitle: "Выберите язык для продолжения" },
    warning: { title: "ПРЕДУПРЕЖДЕНИЕ!", line1: "Этот мод не предназначен для детей или людей, которых легко напугать.", line2: "Этот мод содержит мигающий свет и/или изображения, которые могут вызвать дискомфорт или судороги у людей с фотосенситивной эпилепсией.", question: "ВЫ ХОТИТЕ ПРОДОЛЖИТЬ?", yes: "ДА", no: "НЕТ" },
    nav: { home: "ГЛАВНАЯ", about: "О МОДЕ", download: "СКАЧАТЬ", achievements: "ДОСТИЖЕНИЯ", updates: "ОБНОВЛЕНИЯ", credits: "АВТОРЫ" },
    mobileMenu: { home: "ГЛАВНАЯ", about: "О МОДЕ", gallery: "ГАЛЕРЕЯ", download: "СКАЧАТЬ", credits: "АВТОРЫ" },
    hero: { sub: "ГОТОВ К РАУНДУ 3?", download: "СКАЧАТЬ", achievements: "ДОСТИЖЕНИЯ" },
    about: { title: "О МОДЕ", p1: "Готов сыграть снова...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> — возрождение от фанатов, вдохновлённое знаменитым модом <span class=\"red\">Vs. Sonic.EXE</span> 2021 года. Созданный для воссоздания тёмной атмосферы и ностальгии оригинала, этот проект возвращает часть отменённого контента в виде переосмыслённых историй, песен и персонажей.", p3: "С жуткими встречами, обновлённой графикой и переосмысленными треками <strong>Vs Sonic.EXE (Unofficial)</strong> стремится подарить фанатам оригинального мода как ностальгию, так и свежий опыт.", f1: "50+ переработанных песен", f2: "20+ играбельных персонажей / противников", f3: "Полная система достижений с трофеями GameJolt", f4: "Уникальные арты и анимации для каждого персонажа", f5: "Поддержка нескольких языков" },
    download: { title: "СКАЧАТЬ", sub: "Доступно сейчас", gjSpan: "Играйте и получайте трофеи", note: "Этот мод является фанатским проектом и не связан с SEGA или оригинальной командой Sonic.EXE." },
    achievements: { title: "ДОСТИЖЕНИЯ", gjSub: "Подключите аккаунт GameJolt, чтобы увидеть прогресс", gjUserPlaceholder: "Имя пользователя GameJolt", gjTokenPlaceholder: "Токен GameJolt", gjConnect: "ПОДКЛЮЧИТЬ", gjHelp: "Получите токен на <span class=\"red\">gamejolt.com → Меню профиля → Game Token</span>", gjDisconnect: "ОТКЛЮЧИТЬ", gjCan: "Сможешь разблокировать все?" },
    updates: { title: "ОБНОВЛЕНИЯ", sub: "ЧТО БУДЕТ ДАЛЬШЕ", u1: "Наше первое обновление после запуска запланировано как <strong>Версия 1.5</strong>, которая добавит в мод состав <strong>PARALLAX</strong> вместе с песнями <strong>Рождественского специального выпуска</strong>. Мы очень хотим воплотить это обновление в жизнь и рады продолжать расширять опыт с ещё большим количеством контента.", u2: "Глядя ещё дальше вперёд, <strong>Версия 2</strong> обещает стать нашим самым большим и амбициозным обновлением. Оно продолжит кампанию <strong>Режима истории</strong> со вторым главой <strong>Overthrow</strong>, где вы будете играть за <strong>Подружку</strong>, таинственно перенесённую во время катсцены Triple Trouble. Следите за её путешествием, в котором она столкнётся с новыми угрозами, откроет скрытые истины и переживёт историю с совершенно другой точки зрения. Также будут представлены оставшиеся участники состава <strong>Sound Test</strong> и <strong>File Extensions</strong>. Вместе с новыми песнями, механиками и сюрпризами наша цель — подарить опыт, не похожий ни на что, что мы создавали прежде." },
    comments: { title: "КОММЕНТАРИИ", sub: "Оставьте сообщение — оно появится в нашем Discord", namePlaceholder: "Ваше имя", msgPlaceholder: "Ваш комментарий...", send: "ОТПРАВИТЬ", sending: "Отправка...", ok: "Комментарий отправлен! Проверьте Discord.", errFields: "Введите имя и комментарий.", errConn: "Ошибка подключения. Попробуйте снова." },
    credits: { title: "АВТОРЫ", sub: "Команда за модом" },
    footer: { legal1: "Фанатский мод FNF. Не связан с SEGA или оригинальной командой Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  uk: {
    name: "Українська", flag: "🇺🇦",
    langScreen: { title: "ОБЕРІТЬ МОВУ", subtitle: "Оберіть мову для продовження" },
    warning: { title: "ПОПЕРЕДЖЕННЯ!", line1: "Цей мод не призначений для дітей або людей, яких легко налякати.", line2: "Цей мод містить миготіння світла та/або зображення, які можуть спричинити дискомфорт або судоми у людей із фотосенситивною епілепсією.", question: "ВИ БАЖАЄТЕ ПРОДОВЖИТИ?", yes: "ТАК", no: "НІ" },
    nav: { home: "ГОЛОВНА", about: "ПРО МОД", download: "ЗАВАНТАЖИТИ", achievements: "ДОСЯГНЕННЯ", updates: "ОНОВЛЕННЯ", credits: "АВТОРИ" },
    mobileMenu: { home: "ГОЛОВНА", about: "ПРО МОД", gallery: "ГАЛЕРЕЯ", download: "ЗАВАНТАЖИТИ", credits: "АВТОРИ" },
    hero: { sub: "ГОТОВИЙ ДО РАУНДУ 3?", download: "ЗАВАНТАЖИТИ", achievements: "ДОСЯГНЕННЯ" },
    about: { title: "ПРО МОД", p1: "Готовий зіграти ще раз...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> — відродження від фанатів, натхнене знаменитим модом <span class=\"red\">Vs. Sonic.EXE</span> 2021 року. Створений для відтворення темної атмосфери та ностальгії оригіналу, цей проєкт повертає частину скасованого контенту з новими переосмисленнями сюжету, пісень і персонажів.", p3: "З моторошними зустрічами, оновленою графікою та переосмисленими треками <strong>Vs Sonic.EXE (Unofficial)</strong> прагне подарувати фанатам оригінального мода як ностальгічний, так і свіжий досвід.", f1: "50+ перероблених пісень", f2: "20+ ігрових персонажів / суперників", f3: "Повна система досягнень із трофеями GameJolt", f4: "Унікальні арти та анімації для кожного персонажа", f5: "Підтримка кількох мов" },
    download: { title: "ЗАВАНТАЖИТИ", sub: "Доступно зараз", gjSpan: "Грайте та отримуйте трофеї", note: "Цей мод є фанатським проєктом і не пов'язаний з SEGA або оригінальною командою Sonic.EXE." },
    achievements: { title: "ДОСЯГНЕННЯ", gjSub: "Підключіть акаунт GameJolt, щоб побачити прогрес", gjUserPlaceholder: "Ім'я користувача GameJolt", gjTokenPlaceholder: "Токен GameJolt", gjConnect: "ПІДКЛЮЧИТИ", gjHelp: "Отримайте токен на <span class=\"red\">gamejolt.com → Меню профілю → Game Token</span>", gjDisconnect: "ВІДКЛЮЧИТИ", gjCan: "Чи зможеш розблокувати все?" },
    updates: { title: "ОНОВЛЕННЯ", sub: "ЩО БУДЕ ДАЛІ", u1: "Наше перше оновлення після запуску заплановане як <strong>Версія 1.5</strong>, яка додасть до мода склад <strong>PARALLAX</strong> разом із піснями <strong>Різдвяного спеціального випуску</strong>. Ми дуже хочемо втілити це оновлення в реальність і раді продовжувати розширювати досвід з ще більшою кількістю контенту.", u2: "Дивлячись ще далі вперед, <strong>Версія 2</strong> обіцяє стати нашим найбільшим і найамбітнішим оновленням. Воно продовжить кампанію <strong>Режиму Історії</strong> з другим розділом <strong>Overthrow</strong>, де ви гратимете за <strong>Подружку</strong>, таємничо переміщену під час катсцени Triple Trouble. Слідкуйте за її подорожжю, де вона зіткнеться з новими загрозами, відкриє приховані істини та переживе історію з абсолютно іншої точки зору. Також будуть представлені решта учасників складу <strong>Sound Test</strong> та <strong>File Extensions</strong>. Разом з новими піснями, механіками та сюрпризами наша мета — подарувати досвід, несхожий ні на що, що ми створювали раніше." },
    comments: { title: "КОМЕНТАРІ", sub: "Залиште повідомлення — воно з'явиться в нашому Discord", namePlaceholder: "Ваше ім'я", msgPlaceholder: "Ваш коментар...", send: "НАДІСЛАТИ", sending: "Надсилання...", ok: "Коментар надіслано! Перевірте Discord.", errFields: "Введіть ім'я та коментар.", errConn: "Помилка з'єднання. Спробуйте знову." },
    credits: { title: "АВТОРИ", sub: "Команда за модом" },
    footer: { legal1: "Фанатський мод FNF. Не пов'язаний з SEGA або оригінальною командою Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  de: {
    name: "Deutsch", flag: "🇩🇪",
    langScreen: { title: "SPRACHE WÄHLEN", subtitle: "Wähle deine Sprache, um fortzufahren" },
    warning: { title: "WARNUNG!", line1: "Dieser Mod ist nicht für Kinder oder leicht erschreckbare Personen geeignet.", line2: "Dieser Mod enthält Blitzlichter und/oder Bilder, die bei Personen mit Photosensitiver Epilepsie Unbehagen oder Anfälle verursachen können.", question: "MÖCHTEST DU TROTZDEM FORTFAHREN?", yes: "JA", no: "NEIN" },
    nav: { home: "START", about: "ÜBER", download: "HERUNTERLADEN", achievements: "ERFOLGE", updates: "UPDATES", credits: "CREDITS" },
    mobileMenu: { home: "START", about: "ÜBER", gallery: "GALERIE", download: "HERUNTERLADEN", credits: "CREDITS" },
    hero: { sub: "BEREIT FÜR RUNDE 3?", download: "HERUNTERLADEN", achievements: "ERFOLGE" },
    about: { title: "ÜBER DEN MOD", p1: "Bereit, wieder zu spielen...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> ist ein Fan-Revival, inspiriert vom ikonischen <span class=\"red\">Vs. Sonic.EXE</span>-Mod aus 2021. Entwickelt, um die dunkle Atmosphäre und Nostalgie des Originals wiederzubeleben, bringt dieses Projekt Teile des abgesagten Inhalts mit neuen Neuinterpretationen von Geschichte, Songs und Charakteren zurück.", p3: "Mit unheimlichen Begegnungen, überarbeiteten Visuals und neu interpretierten Tracks möchte <strong>Vs Sonic.EXE (Unofficial)</strong> Fans des Originalmods eine sowohl nostalgische als auch frische Erfahrung bieten.", f1: "50+ neugestaltete Songs", f2: "20+ spielbare Charaktere / Gegner", f3: "Vollständiges Erfolgssystem mit GameJolt-Trophäen", f4: "Einzigartiges Artwork & Animationen für jeden Charakter", f5: "Mehrsprachige Unterstützung" },
    download: { title: "HERUNTERLADEN", sub: "Jetzt verfügbar", gjSpan: "Spielen und Trophäen verdienen", note: "Dieser Mod ist ein Fan-Projekt und nicht mit SEGA oder dem originalen Sonic.EXE-Team verbunden." },
    achievements: { title: "ERFOLGE", gjSub: "Verbinde deinen GameJolt-Account, um deinen Fortschritt zu sehen", gjUserPlaceholder: "GameJolt Benutzername", gjTokenPlaceholder: "GameJolt Token", gjConnect: "VERBINDEN", gjHelp: "Hole deinen Token auf <span class=\"red\">gamejolt.com → Profilmenü → Game Token</span>", gjDisconnect: "TRENNEN", gjCan: "Kannst du alle freischalten?" },
    updates: { title: "UPDATES", sub: "WAS ALS NÄCHSTES KOMMT", u1: "Unser erstes Post-Launch-Update ist als <strong>Version 1.5</strong> geplant und bringt das <strong>PARALLAX</strong>-Cast sowie die <strong>Weihnachts-Special</strong>-Songs in den Mod. Wir möchten dieses Update gerne verwirklichen und freuen uns, das Erlebnis mit noch mehr Inhalten zu erweitern.", u2: "Noch weiter in die Zukunft blickend, entwickelt sich <strong>Version 2</strong> zu unserem bisher größten und ambitioniertesten Update. Es setzt die <strong>Story-Modus</strong>-Kampagne mit dem zweiten Kapitel <strong>Overthrow</strong> fort, in dem du als <strong>Girlfriend</strong> spielst, nachdem sie während der Triple Trouble-Cutscene mysteriös teleportiert wurde. Begleite ihre Reise, während sie neuen Bedrohungen begegnet, versteckte Wahrheiten enthüllt und die Geschichte aus einer völlig anderen Perspektive erlebt. Dieses Update wird auch die verbleibenden Mitglieder des <strong>Sound Test</strong>- und <strong>File Extensions</strong>-Casts vorstellen. Mit neuen Songs, Mechaniken und Überraschungen ist unser Ziel, ein Erlebnis zu liefern, das wir so noch nicht geschaffen haben." },
    comments: { title: "KOMMENTARE", sub: "Hinterlass eine Nachricht — sie erscheint in unserem Discord", namePlaceholder: "Dein Name", msgPlaceholder: "Dein Kommentar...", send: "SENDEN", sending: "Wird gesendet...", ok: "Kommentar gesendet! Schau in den Discord.", errFields: "Gib deinen Namen und einen Kommentar ein.", errConn: "Verbindung fehlgeschlagen. Versuche es erneut." },
    credits: { title: "CREDITS", sub: "Das Team hinter dem Mod" },
    footer: { legal1: "Fan-gemachter FNF Mod. Nicht verbunden mit SEGA oder dem originalen Sonic.exe-Team.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  pirate: {
    name: "Pirate", flag: "🏴‍☠️",
    langScreen: { title: "CHOOSE YER TONGUE", subtitle: "Pick yer language to set sail" },
    warning: { title: "BLIMEY!", line1: "This mod be not fer young scalawags or landlubbers with weak constitutions.", line2: "This mod be containin' flashin' lights an' cursed imagery that may cause seizures in those afflicted with photosensitive epilepsy, arrr.", question: "DO YE WISH TO SAIL FORTH ANYWAY?", yes: "AYE!", no: "ABANDON SHIP" },
    nav: { home: "PORT", about: "THE TALE", download: "PLUNDER", achievements: "BOUNTIES", updates: "NEW HORIZONS", credits: "THE CREW" },
    mobileMenu: { home: "PORT", about: "THE TALE", gallery: "TREASURE", download: "PLUNDER", credits: "THE CREW" },
    hero: { sub: "READY FER ROUND 3, MATEY?", download: "PLUNDER", achievements: "BOUNTIES" },
    about: { title: "THE TALE OF THE MOD", p1: "Ready to sail these cursed seas once more...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> be a fan-made revival inspired by the legendary <span class=\"red\">Vs. Sonic.EXE</span> mod of 2021. Built to recapture the dark depths and nostalgia of the original, this voyage brings back the cancelled plunder with reimagined tales, shanties and scallywags.", p3: "With hair-raisin' encounters, revamped visuals and reimagined shanties, <strong>Vs Sonic.EXE (Unofficial)</strong> aims to deliver a voyage both nostalgic and fresh fer fans of the original mod.", f1: "50+ remade shanties", f2: "20+ playable scallywags / opponents", f3: "Full bounty system with GameJolt trophies", f4: "Unique art & animations fer every pirate", f5: "Multi-tongue support" },
    download: { title: "PLUNDER", sub: "Available to pillage NOW", gjSpan: "Play & earn yer bounty", note: "This mod be a fan-made voyage and be not affiliated with SEGA nor the original Sonic.EXE crew." },
    achievements: { title: "BOUNTIES", gjSub: "Connect yer GameJolt account to see yer plunder", gjUserPlaceholder: "GameJolt Pirate Name", gjTokenPlaceholder: "GameJolt Secret Code", gjConnect: "SET SAIL", gjHelp: "Get yer token at <span class=\"red\">gamejolt.com → Profile Menu → Game Token</span>", gjDisconnect: "ABANDON SHIP", gjCan: "Can ye unlock all the bounties, matey?" },
    updates: { title: "NEW HORIZONS", sub: "WHAT LIES AHEAD", u1: "Our first post-launch voyage is planned as <strong>Version 1.5</strong>, bringin' the <strong>PARALLAX</strong> crew aboard alongside the <strong>Christmas Special</strong> shanties. We'd love to make this voyage a reality, arrr, and we be excited to keep expandin' the treasure with even more content.", u2: "Lookin' even further on the horizon, <strong>Version 2</strong> be shapin' up to be our greatest and most ambitious voyage yet. It be continuin' the <strong>Story Mode</strong> campaign with its second chapter, <strong>Overthrow</strong>, where ye'll play as <strong>Girlfriend</strong> after she be mysteriously teleported during the Triple Trouble cutscene. Follow her voyage as she faces new threats, uncovers hidden truths, and experiences the story from an entirely different crow's nest. This voyage will also introduce the remaining crew of <strong>Sound Test</strong> and <strong>File Extensions</strong>. Alongside new shanties, mechanics, and surprises, our goal is to deliver a voyage unlike anything we've charted before, arrr." },
    comments: { title: "MESSAGES IN A BOTTLE", sub: "Leave a message, matey — it'll wash up in our Discord", namePlaceholder: "Yer pirate name", msgPlaceholder: "Yer message, arrr...", send: "SEND IT TO SEA", sending: "Settin' sail...", ok: "Message sent, arrr! Check the Discord.", errFields: "Enter yer name and a message, scallywag.", errConn: "The seas be rough. Try again, matey." },
    credits: { title: "THE CREW", sub: "The scallywags behind the mod" },
    footer: { legal1: "Fan-made FNF mod. Not affiliated with SEGA nor the Original Sonic.exe Crew.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  it: {
    name: "Italiano", flag: "🇮🇹",
    langScreen: { title: "SELEZIONA LINGUA", subtitle: "Scegli la tua lingua per continuare" },
    warning: { title: "ATTENZIONE!", line1: "Questa mod non è adatta ai bambini o alle persone facilmente turbabili.", line2: "Questa mod contiene luci lampeggianti e/o immagini che potrebbero causare disagio o convulsioni nelle persone con epilessia fotosensibile.", question: "VUOI CONTINUARE COMUNQUE?", yes: "SÌ", no: "NO" },
    nav: { home: "HOME", about: "INFO", download: "SCARICA", achievements: "OBIETTIVI", updates: "AGGIORNAMENTI", credits: "CREDITI" },
    mobileMenu: { home: "HOME", about: "INFO", gallery: "GALLERIA", download: "SCARICA", credits: "CREDITI" },
    hero: { sub: "PRONTO PER IL ROUND 3?", download: "SCARICA", achievements: "OBIETTIVI" },
    about: { title: "INFORMAZIONI SULLA MOD", p1: "Pronto a giocare ancora...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> è un revival creato dai fan, ispirato all'iconico mod <span class=\"red\">Vs. Sonic.EXE</span> del 2021. Creato per rivivere l'atmosfera oscura e la nostalgia dell'originale, questo progetto riporta parte del contenuto cancellato con nuove reinterpretazioni della storia, delle canzoni e dei personaggi.", p3: "Con incontri inquietanti, visual rinnovati e tracce reimmagnate, <strong>Vs Sonic.EXE (Unofficial)</strong> mira a offrire un'esperienza nostalgica e fresca ai fan della mod originale.", f1: "50+ canzoni rifatte", f2: "20+ personaggi giocabili / avversari", f3: "Sistema completo di obiettivi con trofei GameJolt", f4: "Arte e animazioni uniche per ogni personaggio", f5: "Supporto multilingue" },
    download: { title: "SCARICA", sub: "Disponibile ora", gjSpan: "Gioca e guadagna trofei", note: "Questa mod è un progetto creato dai fan e non è affiliata con SEGA o il team originale di Sonic.EXE." },
    achievements: { title: "OBIETTIVI", gjSub: "Collega il tuo account GameJolt per vedere i progressi", gjUserPlaceholder: "Nome utente GameJolt", gjTokenPlaceholder: "Token GameJolt", gjConnect: "CONNETTI", gjHelp: "Ottieni il tuo token su <span class=\"red\">gamejolt.com → Menu Profilo → Game Token</span>", gjDisconnect: "DISCONNETTI", gjCan: "Riesci a sbloccarli tutti?" },
    updates: { title: "AGGIORNAMENTI", sub: "COSA ARRIVERÀ", u1: "Il nostro primo aggiornamento post-lancio è pianificato come <strong>Versione 1.5</strong>, che porterà il cast di <strong>PARALLAX</strong> nella mod insieme alle canzoni dello <strong>Speciale Natalizio</strong>. Vorremmo molto realizzare questo aggiornamento e siamo entusiasti di continuare ad espandere l'esperienza con ancora più contenuti.", u2: "Guardando ancora più avanti, la <strong>Versione 2</strong> si profila come il nostro aggiornamento più grande e ambizioso. Continuerà la campagna della <strong>Modalità Storia</strong> con il suo secondo capitolo, <strong>Overthrow</strong>, dove giocherai come <strong>Girlfriend</strong> dopo essere stata misteriosamente teletrasportata durante il filmato di Triple Trouble. Segui il suo viaggio mentre affronta nuove minacce, scopre verità nascoste e vive la storia da una prospettiva completamente diversa. Questo aggiornamento introdurrà anche i membri rimanenti del cast di <strong>Sound Test</strong> e <strong>File Extensions</strong>. Con nuove canzoni, meccaniche e sorprese, il nostro obiettivo è offrire un'esperienza diversa da qualsiasi cosa abbiamo creato prima." },
    comments: { title: "COMMENTI", sub: "Lascia un messaggio — apparirà nel nostro Discord", namePlaceholder: "Il tuo nome", msgPlaceholder: "Il tuo commento...", send: "INVIA", sending: "Invio in corso...", ok: "Commento inviato! Controlla il Discord.", errFields: "Inserisci il tuo nome e un commento.", errConn: "Connessione fallita. Riprova." },
    credits: { title: "CREDITI", sub: "Il team dietro la mod" },
    footer: { legal1: "Mod FNF creata dai fan. Non affiliata con SEGA o il team originale di Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  ar: {
    name: "العربية", flag: "🇸🇦",
    langScreen: { title: "اختر اللغة", subtitle: "اختر لغتك للمتابعة" },
    warning: { title: "تحذير!", line1: "هذا المود غير مناسب للأطفال أو الأشخاص الذين يتأثرون بسهولة.", line2: "يحتوي هذا المود على إضاءات وامضة و/أو صور قد تسبب انزعاجاً أو نوبات لدى الأشخاص المصابين بالصرع الضوئي.", question: "هل تريد المتابعة على أي حال؟", yes: "نعم", no: "لا" },
    nav: { home: "الرئيسية", about: "حول", download: "تنزيل", achievements: "الإنجازات", updates: "التحديثات", credits: "الفريق" },
    mobileMenu: { home: "الرئيسية", about: "حول", gallery: "المعرض", download: "تنزيل", credits: "الفريق" },
    hero: { sub: "مستعد للجولة الثالثة؟", download: "تنزيل", achievements: "الإنجازات" },
    about: { title: "حول المود", p1: "مستعد للعب مرة أخرى...؟", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> هو إحياء من صنع المعجبين مستوحى من مود <span class=\"red\">Vs. Sonic.EXE</span> الشهير عام 2021. صُمم لاستعادة الأجواء المظلمة والحنين للنسخة الأصلية، ويعيد هذا المشروع جزءاً من المحتوى الملغى بتصورات جديدة للقصة والأغاني والشخصيات.", p3: "بلقاءات مرعبة وصور مُجددة ومسارات مُعاد تصورها، يهدف <strong>Vs Sonic.EXE (Unofficial)</strong> إلى تقديم تجربة مليئة بالحنين والجدة لمحبي المود الأصلي.", f1: "أكثر من 50 أغنية مُعاد صنعها", f2: "أكثر من 20 شخصية قابلة للعب / خصوم", f3: "نظام إنجازات كامل مع كؤوس GameJolt", f4: "فنون ورسوم متحركة فريدة لكل شخصية", f5: "دعم متعدد اللغات" },
    download: { title: "تنزيل", sub: "متاح الآن", gjSpan: "العب واكسب الكؤوس", note: "هذا المود مشروع من صنع المعجبين وغير مرتبط بـ SEGA أو فريق Sonic.EXE الأصلي." },
    achievements: { title: "الإنجازات", gjSub: "اربط حسابك في GameJolt لرؤية تقدمك", gjUserPlaceholder: "اسم مستخدم GameJolt", gjTokenPlaceholder: "رمز GameJolt", gjConnect: "ربط", gjHelp: "احصل على رمزك في <span class=\"red\">gamejolt.com → قائمة الملف الشخصي → Game Token</span>", gjDisconnect: "قطع الاتصال", gjCan: "هل يمكنك فتح جميعها؟" },
    updates: { title: "التحديثات", sub: "ما القادم", u1: "تحديثنا الأول بعد الإطلاق مخطط له كـ<strong>الإصدار 1.5</strong>، ليُضيف طاقم <strong>PARALLAX</strong> إلى المود جنباً إلى جنب مع أغاني <strong>الخاص بعيد الميلاد</strong>. نتمنى تحقيق هذا التحديث ونحن متحمسون لمواصلة توسيع التجربة بمزيد من المحتوى.", u2: "بالنظر إلى المستقبل البعيد، يتشكل <strong>الإصدار 2</strong> ليكون أكبر وأكثر طموحاً من أي تحديث سابق. سيواصل حملة <strong>وضع القصة</strong> بفصلها الثاني <strong>Overthrow</strong>، حيث ستلعب بشخصية <strong>Girlfriend</strong> بعد انتقالها الغامض خلال مشهد Triple Trouble. تابع رحلتها وهي تواجه تهديدات جديدة وتكشف حقائق خفية وتعيش القصة من منظور مختلف تماماً. سيُقدم هذا التحديث أيضاً الأعضاء المتبقين من طاقمي <strong>Sound Test</strong> و<strong>File Extensions</strong>. مع أغاني وميكانيكيات ومفاجآت جديدة، هدفنا تقديم تجربة لا تشبه أي شيء أنشأناه من قبل." },
    comments: { title: "التعليقات", sub: "اترك رسالة — ستظهر في Discord الخاص بنا", namePlaceholder: "اسمك", msgPlaceholder: "تعليقك...", send: "إرسال", sending: "جارٍ الإرسال...", ok: "تم إرسال التعليق! تحقق من Discord.", errFields: "أدخل اسمك وتعليقك.", errConn: "فشل الاتصال. حاول مرة أخرى." },
    credits: { title: "الفريق", sub: "الفريق خلف المود" },
    footer: { legal1: "مود FNF من صنع المعجبين. غير مرتبط بـ SEGA أو فريق Sonic.exe الأصلي.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  pl: {
    name: "Polski", flag: "🇵🇱",
    langScreen: { title: "WYBIERZ JĘZYK", subtitle: "Wybierz język, aby kontynuować" },
    warning: { title: "OSTRZEŻENIE!", line1: "Ten mod nie jest przeznaczony dla dzieci ani osób łatwo podatnych na strach.", line2: "Ten mod zawiera migające światła i/lub obrazy, które mogą powodować dyskomfort lub drgawki u osób z padaczką fotosensitywną.", question: "CZY CHCESZ KONTYNUOWAĆ?", yes: "TAK", no: "NIE" },
    nav: { home: "STRONA GŁÓWNA", about: "O MODZIE", download: "POBIERZ", achievements: "OSIĄGNIĘCIA", updates: "AKTUALIZACJE", credits: "TWÓRCY" },
    mobileMenu: { home: "STRONA GŁÓWNA", about: "O MODZIE", gallery: "GALERIA", download: "POBIERZ", credits: "TWÓRCY" },
    hero: { sub: "GOTOWY NA RUNDĘ 3?", download: "POBIERZ", achievements: "OSIĄGNIĘCIA" },
    about: { title: "O MODZIE", p1: "Gotowy zagrać jeszcze raz...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> to fanowski revival inspirowany kultowym modem <span class=\"red\">Vs. Sonic.EXE</span> z 2021 roku. Stworzony, aby odtworzyć mroczną atmosferę i nostalgię oryginału, projekt przywraca część anulowanej zawartości z nowymi interpretacjami historii, piosenek i postaci.", p3: "Z przerażającymi spotkaniami, odświeżoną oprawą wizualną i nowymi wersjami utworów, <strong>Vs Sonic.EXE (Unofficial)</strong> ma dostarczyć fanom oryginalnego moda zarówno nostalgicznych, jak i świeżych wrażeń.", f1: "50+ przerobionych piosenek", f2: "20+ grywalnych postaci / przeciwników", f3: "Pełny system osiągnięć z trofeami GameJolt", f4: "Unikalna grafika i animacje dla każdej postaci", f5: "Wsparcie wielu języków" },
    download: { title: "POBIERZ", sub: "Dostępne teraz", gjSpan: "Graj i zdobywaj trofea", note: "Ten mod jest projektem fanowskim i nie jest powiązany z SEGA ani oryginalnym zespołem Sonic.EXE." },
    achievements: { title: "OSIĄGNIĘCIA", gjSub: "Połącz konto GameJolt, aby zobaczyć postęp", gjUserPlaceholder: "Nazwa użytkownika GameJolt", gjTokenPlaceholder: "Token GameJolt", gjConnect: "POŁĄCZ", gjHelp: "Zdobądź token na <span class=\"red\">gamejolt.com → Menu Profilu → Game Token</span>", gjDisconnect: "ROZŁĄCZ", gjCan: "Czy uda ci się odblokować wszystkie?" },
    updates: { title: "AKTUALIZACJE", sub: "CO NADCHODZI", u1: "Nasza pierwsza aktualizacja po premierze zaplanowana jest jako <strong>Wersja 1.5</strong>, która wprowadzi obsadę <strong>PARALLAX</strong> do moda wraz z piosenkami ze <strong>Specjału Bożonarodzeniowego</strong>. Chcielibyśmy, aby ta aktualizacja stała się rzeczywistością i cieszymy się na dalsze rozszerzanie doświadczenia o jeszcze więcej treści.", u2: "Patrząc jeszcze dalej, <strong>Wersja 2</strong> zapowiada się jako nasz największy i najbardziej ambitny update. Będzie kontynuować kampanię <strong>Trybu Fabularnego</strong> z drugim rozdziałem <strong>Overthrow</strong>, gdzie zagrasz jako <strong>Girlfriend</strong> po tajemniczym teleportowaniu podczas przerywnika Triple Trouble. Śledź jej podróż, gdy stawia czoła nowym zagrożeniom, odkrywa ukryte prawdy i doświadcza historii z zupełnie innej perspektywy. Aktualizacja wprowadzi też pozostałych członków obsady <strong>Sound Test</strong> i <strong>File Extensions</strong>. Wraz z nowymi piosenkami, mechanikami i niespodziankami, naszym celem jest dostarczenie doświadczenia niepodobnego do niczego, co stworzyliśmy wcześniej." },
    comments: { title: "KOMENTARZE", sub: "Zostaw wiadomość — pojawi się na naszym Discordzie", namePlaceholder: "Twoje imię", msgPlaceholder: "Twój komentarz...", send: "WYŚLIJ", sending: "Wysyłanie...", ok: "Komentarz wysłany! Sprawdź Discorda.", errFields: "Wpisz swoje imię i komentarz.", errConn: "Błąd połączenia. Spróbuj ponownie." },
    credits: { title: "TWÓRCY", sub: "Zespół stojący za modem" },
    footer: { legal1: "Fanowski mod FNF. Nie powiązany z SEGA ani oryginalnym zespołem Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  },
  tr: {
    name: "Türkçe", flag: "🇹🇷",
    langScreen: { title: "DİL SEÇ", subtitle: "Devam etmek için dilinizi seçin" },
    warning: { title: "UYARI!", line1: "Bu mod çocuklar veya kolayca rahatsız olan kişiler için uygun değildir.", line2: "Bu mod, ışığa duyarlı epilepsisi olan kişilerde rahatsızlığa veya nöbete yol açabilecek yanıp sönen ışıklar ve/veya görüntüler içermektedir.", question: "YINE DE DEVAM ETMEK İSTİYOR MUSUNUZ?", yes: "EVET", no: "HAYIR" },
    nav: { home: "ANA SAYFA", about: "HAKKINDA", download: "İNDİR", achievements: "BAŞARILAR", updates: "GÜNCELLEMELER", credits: "YAPIMCILAR" },
    mobileMenu: { home: "ANA SAYFA", about: "HAKKINDA", gallery: "GALERİ", download: "İNDİR", credits: "YAPIMCILAR" },
    hero: { sub: "3. TUR İÇİN HAZIR MISIN?", download: "İNDİR", achievements: "BAŞARILAR" },
    about: { title: "MOD HAKKINDA", p1: "Yeniden oynamaya hazır mısın...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong>, 2021'in ikonik <span class=\"red\">Vs. Sonic.EXE</span> modundan ilham alan hayran yapımı bir canlandırmadır. Orijinalin karanlık atmosferini ve nostaljisini yeniden yakalamak için oluşturulan bu proje, iptal edilen içeriğin bir kısmını yeni hikaye, şarkı ve karakter yorumlarıyla geri getiriyor.", p3: "Ürkütücü karşılaşmalar, yenilenmiş görseller ve yeniden tasarlanan parçalarla <strong>Vs Sonic.EXE (Unofficial)</strong>, orijinal modun hayranlarına hem nostaljik hem taze bir deneyim sunmayı hedefliyor.", f1: "50'den fazla yeniden yapılmış şarkı", f2: "20'den fazla oynanabilir karakter / rakip", f3: "GameJolt kupalarıyla tam başarı sistemi", f4: "Her karakter için özgün sanat ve animasyonlar", f5: "Çok dilli destek" },
    download: { title: "İNDİR", sub: "Şimdi mevcut", gjSpan: "Oyna ve kupa kazan", note: "Bu mod, hayranlar tarafından yapılmış bir projedir ve SEGA ya da orijinal Sonic.EXE ekibiyle bağlantısı yoktur." },
    achievements: { title: "BAŞARILAR", gjSub: "İlerlemenizi görmek için GameJolt hesabınızı bağlayın", gjUserPlaceholder: "GameJolt Kullanıcı Adı", gjTokenPlaceholder: "GameJolt Token", gjConnect: "BAĞLAN", gjHelp: "Token'ınızı <span class=\"red\">gamejolt.com → Profil Menüsü → Game Token</span> adresinden alın", gjDisconnect: "BAĞLANTI KES", gjCan: "Hepsinin kilidini açabilecek misin?" },
    updates: { title: "GÜNCELLEMELER", sub: "SIRADA NE VAR", u1: "İlk lansman sonrası güncellememiz <strong>Sürüm 1.5</strong> olarak planlanmaktadır ve <strong>Noel Özel</strong> şarkılarıyla birlikte <strong>PARALLAX</strong> kadrosunu moda getirmektedir. Bu güncellemeyi gerçeğe dönüştürmek istiyoruz ve deneyimi daha fazla içerikle genişletmeye devam etmekten heyecan duyuyoruz.", u2: "Daha da ileriye bakıldığında, <strong>Sürüm 2</strong> şimdiye kadarki en büyük ve en iddialı güncellememiz olmaya hazırlanıyor. <strong>Hikaye Modu</strong> kampanyasını ikinci bölüm <strong>Overthrow</strong> ile sürdürecek; Triple Trouble sahnesinde gizemce ışınlanan <strong>Girlfriend</strong> olarak oynayacaksınız. Yeni tehditlerle yüzleşirken, gizli gerçekleri ortaya çıkarırken ve hikayeyi tamamen farklı bir perspektiften yaşarken onun yolculuğunu takip edin. Bu güncelleme aynı zamanda <strong>Sound Test</strong> ve <strong>File Extensions</strong> kadrosunun kalan üyelerini de tanıtacak. Yeni şarkılar, mekanikler ve sürprizlerle hedefimiz, daha önce yarattığımız hiçbir şeye benzemeyen bir deneyim sunmaktır." },
    comments: { title: "YORUMLAR", sub: "Mesaj bırakın — Discord'umuzda görünecek", namePlaceholder: "Adınız", msgPlaceholder: "Yorumunuz...", send: "GÖNDER", sending: "Gönderiliyor...", ok: "Yorum gönderildi! Discord'u kontrol edin.", errFields: "Adınızı ve yorumunuzu girin.", errConn: "Bağlantı hatası. Tekrar deneyin." },
    credits: { title: "YAPIMCILAR", sub: "Modun arkasındaki ekip" },
    footer: { legal1: "Hayranlar tarafından yapılmış FNF modu. SEGA veya orijinal Sonic.exe ekibiyle bağlantısı yoktur.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." }
  }
};

function applyLang(code) {
  const L = LANGS[code];
  if (!L) return;
  localStorage.setItem('exeLang', code);

  document.documentElement.setAttribute('dir', code === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', code);

  document.getElementById('warningTitle').textContent    = L.warning.title;
  document.getElementById('warningLine1').textContent    = L.warning.line1;
  document.getElementById('warningLine2').textContent    = L.warning.line2;
  document.getElementById('warningQuestion').textContent = L.warning.question;
  document.getElementById('warnYes').textContent         = L.warning.yes;
  document.getElementById('warnNo').textContent          = L.warning.no;

  const nl = document.querySelectorAll('.nav-links a');
  nl[0].textContent = L.nav.home;
  nl[1].textContent = L.nav.about;
  nl[2].textContent = L.nav.download;
  nl[3].textContent = L.nav.achievements;
  nl[4].textContent = L.nav.updates;
  if (nl[5]) nl[5].textContent = L.comments.title;
  if (nl[6]) nl[6].textContent = L.nav.credits;

  const ml = document.querySelectorAll('.mobile-menu a');
  ml[0].textContent = L.mobileMenu.home;
  ml[1].textContent = L.mobileMenu.about;
  ml[2].textContent = L.mobileMenu.gallery;
  ml[3].textContent = L.mobileMenu.download;
  ml[4].textContent = L.mobileMenu.credits;

  document.querySelector('.hero-sub').textContent = L.hero.sub;
  const heroBtns = document.querySelectorAll('.hero-btns .btn');
  heroBtns[0].textContent = L.hero.download;
  heroBtns[1].textContent = L.hero.achievements;

  document.querySelector('.section-title').textContent = L.about.title;
  const ps = document.querySelectorAll('.about-text p');
  ps[0].textContent = L.about.p1;
  ps[1].innerHTML   = L.about.p2;
  ps[2].innerHTML   = L.about.p3;
  const fs = document.querySelectorAll('.about-features li');
  fs[0].textContent = L.about.f1;
  fs[1].textContent = L.about.f2;
  fs[2].textContent = L.about.f3;
  fs[3].textContent = L.about.f4;
  fs[4].textContent = L.about.f5;

  const dlTitle = document.querySelector('#download .section-title');
  const dlSub   = document.querySelector('#download .section-sub');
  const dlSpan  = document.querySelector('.dl-info span');
  const dlNote  = document.querySelector('.dl-note');
  if (dlTitle) dlTitle.textContent = L.download.title;
  if (dlSub)   dlSub.textContent   = L.download.sub;
  if (dlSpan)  dlSpan.textContent  = L.download.gjSpan;
  if (dlNote)  dlNote.textContent  = L.download.note;

  const achBtn = document.querySelector('#gallery .accordion-btn span:first-child');
  if (achBtn) achBtn.textContent = L.achievements.title;
  const gjSub = document.querySelector('#gjLogin .section-sub');
  if (gjSub) gjSub.textContent = L.achievements.gjSub;
  const gjUser = document.getElementById('gjUsername');
  if (gjUser) gjUser.placeholder = L.achievements.gjUserPlaceholder;
  const gjTok = document.getElementById('gjToken');
  if (gjTok) gjTok.placeholder = L.achievements.gjTokenPlaceholder;
  const gjSubmit = document.getElementById('gjSubmit');
  if (gjSubmit) gjSubmit.textContent = L.achievements.gjConnect;
  const gjHelp = document.getElementById('gjHelp');
  if (gjHelp) gjHelp.innerHTML = L.achievements.gjHelp;
  const gjLogout = document.getElementById('gjLogout');
  if (gjLogout) gjLogout.textContent = L.achievements.gjDisconnect;
  const gjCan = document.querySelector('#achieveBody .section-sub');
  if (gjCan) gjCan.textContent = L.achievements.gjCan;

  const updBtn = document.querySelector('#updates .accordion-btn span:first-child');
  if (updBtn) updBtn.textContent = L.updates.title;
  const updBodies = document.querySelectorAll('.update-body p');
  if (updBodies[0]) updBodies[0].innerHTML = L.updates.u1;
  if (updBodies[1]) updBodies[1].innerHTML = L.updates.u2;

  const cmtBtn = document.querySelector('#comments .accordion-btn span:first-child');
  if (cmtBtn) cmtBtn.textContent = L.comments.title;
  const cmtSub = document.querySelector('#comments .section-sub');
  if (cmtSub) cmtSub.textContent = L.comments.sub;
  const cmtName = document.getElementById('cmtName');
  if (cmtName) cmtName.placeholder = L.comments.namePlaceholder;
  const cmtMsg = document.getElementById('cmtMsg');
  if (cmtMsg) cmtMsg.placeholder = L.comments.msgPlaceholder;
  const cmtSubmit = document.getElementById('cmtSubmit');
  if (cmtSubmit) cmtSubmit.textContent = L.comments.send;

  const credBtn = document.querySelector('#credits .accordion-btn span:first-child');
  if (credBtn) credBtn.textContent = L.credits.title;
  const credSub = document.querySelector('#creditsBody .section-sub');
  if (credSub) credSub.textContent = L.credits.sub;

  const fl = document.querySelectorAll('.footer-legal');
  if (fl[0]) fl[0].textContent = L.footer.legal1;
  if (fl[1]) fl[1].textContent = L.footer.legal2;
}

function showLangScreen() {
  const saved = localStorage.getItem('exeLang');
  if (saved && LANGS[saved]) applyLang(saved);

  const screen = document.createElement('div');
  screen.id = 'langScreen';
  screen.innerHTML = `
    <div id="langBox">
      <div id="langTitle">SELECT LANGUAGE</div>
      <div id="langSubtitle">Choose your language to continue</div>
      <div id="langGrid">
        ${Object.entries(LANGS).map(([code, l]) => `
          <button class="lang-btn" data-code="${code}">${l.name}</button>
        `).join('')}
      </div>
    </div>
  `;
  document.body.prepend(screen);

  screen.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      applyLang(code);
      screen.style.opacity = '0';
      screen.style.transition = 'opacity 0.4s ease';
      setTimeout(() => screen.remove(), 400);
    });
  });
}

showLangScreen();
