import './style.css';

const mingas = [
  {
    id: 'iema-flores',
    short: 'IEMA Flores',
    title: 'Minga IEMA Flores',
    neighborhood: 'Flores',
    image: `${import.meta.env.BASE_URL}logos/IEMA.jpeg`,
    tasks: ['Limpieza de pastizales', 'Picar y lijar paredes', 'Preparar paredes para pintar', 'Almuerzo comunitario el domingo'],
    learn: 'Compromiso histórico con los derechos humanos, diálogo interreligioso y trabajo social barrial.',
    duration: 'Sábado y domingo',
    driveUrl: 'https://drive.google.com/drive/folders/1-rlPdPzq79Wku-Ms1-MWplAkpv2uBIYk',
    icon: '✦'
  },
  {
    id: 'virgen-inmaculada', short: 'Virgen Inmaculada', title: 'Minga CCC Virgen Inmaculada', neighborhood: 'Ramón Carrillo · Soldati',
    image: `${import.meta.env.BASE_URL}logos/INMACULADA.png`,
    tasks: ['Lijar paredes', 'Pintar y hacer arreglos en el colegio', 'Trabajos de soldadura', 'Actividades con infancias y jóvenes'],
    learn: 'Deporte como inclusión, Hogares de Cristo, acompañamiento en consumos problemáticos y trabajo comunitario desde la fe.', duration: 'Sábado y domingo', driveUrl: 'https://drive.google.com/drive/folders/1Tkb_pxVDfAxOszgOj62nqaUb6QrOqk0T', icon: '◈'
  },
  {
    id: 'san-pantaleon', short: 'San Pantaleón', title: 'Minga Santuario San Pantaleón', neighborhood: 'Mataderos',
    image: `${import.meta.env.BASE_URL}logos/SAN%20PANTALEON.JPG.jpeg`,
    tasks: ['Pintar y lijar paredes', 'Arreglos del patio', 'Limpieza para peregrinos', 'Almuerzo con la comunidad parroquial'],
    learn: 'El trabajo comunitario alrededor de uno de los santuarios más importantes del barrio.', duration: 'Solo sábado', driveUrl: 'https://drive.google.com/drive/folders/1sRnG5P2zhYplNz3--rtNpwbXQvXTCqoM', icon: '✚'
  },
  {
    id: 'coopa', short: 'CooPA', title: 'Minga CooPA', neighborhood: 'Rivadavia · Bajo Flores',
    image: `${import.meta.env.BASE_URL}logos/COOPA.jpeg`,
    tasks: ['Albañilería y revoques', 'Pintura completa', 'Instalaciones del aula informática', 'Limpieza de desagües'],
    learn: 'Educación en oficios, organización barrial y promoción de derechos.', duration: 'Sábado y domingo', driveUrl: 'https://drive.google.com/drive/folders/1JE7x_U1zHqF0tZVHYJi1jTXI9-jFgLdu', icon: '⌁'
  },
  {
    id: 'la-poderosa', short: 'La Poderosa', title: 'Minga La Poderosa', neighborhood: 'Fátima · Soldati',
    image: `${import.meta.env.BASE_URL}logos/LA%20PODEROSA.jpg.jpeg`,
    tasks: ['Arreglos del comedor', 'Acondicionar espacios', 'Organizar materiales educativos', 'Juegos con niñas y niños'],
    learn: 'Organización popular, liderazgo barrial y promoción de derechos.', duration: 'Sábado · domingo a confirmar', driveUrl: 'https://drive.google.com/drive/folders/1CrEEb11bSHZTriJos8EGE0YQO-KT7XjL', icon: '⌂'
  },
  {
    id: 'piedrabuenarte', short: 'Piedrabuenarte', title: 'Minga Galpón Piedrabuenarte', neighborhood: 'Piedrabuena · Lugano',
    image: `${import.meta.env.BASE_URL}logos/PIEDRABUENARTE.png`,
    tasks: ['Pintar y arreglar el patio', 'Acondicionar espacios culturales', 'Organizar materiales artísticos'],
    learn: 'Gestión comunitaria del espacio público, arte y cultura como herramientas de transformación.', duration: 'Sábado y domingo', driveUrl: 'https://drive.google.com/drive/folders/1OjC06Xa0z_-ogUpmF-c3ENEcNi7tPLK5', icon: '●'
  }
];

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Mingas Urbanas, volver al inicio"><span class="brand-mark">✳</span><span>MINGAS<br><b>URBANAS</b></span></a>
    <nav class="nav-links" aria-label="Navegación principal"><a href="#mingas">Las mingas</a><a href="#cronograma">Cronograma</a><a href="#sumate">Sumate</a></nav>
    <a class="header-cta" href="#mingas">Explorar <span>↗</span></a>
  </header>

  <main id="inicio">
    <section class="hero">
      <div class="hero-image"></div><div class="hero-overlay"></div>
      <div class="hero-content reveal">
        <p class="eyebrow"><span></span> Rover Scout Argentina · Zona 2</p>
        <h1>MINGAS<br><em>URBANAS</em></h1>
        <div class="hero-rule"><span></span><strong>ZONA 2</strong><span></span></div>
        <p class="hero-tagline">El arte de hacer juntos.</p>
        <p class="hero-description">Construyendo colectivamente una primavera diferente. La Minga recupera la tradición latinoamericana del trabajo comunitario: compartir saberes, herramientas y tiempo para transformar la realidad juntos.</p>
        <a class="button button-light" href="#mingas">Conocé las mingas <span>↓</span></a>
      </div>
      <div class="hero-brand-lockup"><img src="${import.meta.env.BASE_URL}logos/logo%20minga%20blanco.png" alt="Mingas Urbanas"></div>
      <div class="scroll-cue">Deslizá para explorar <span>↓</span></div>
    </section>

    <section class="selector-section section-shell" id="mingas">
      <div class="section-intro reveal"><p class="kicker">01 / Elegí tu territorio</p><h2>Seis lugares.<br><em>Una misma fuerza.</em></h2><p>Encontrá tu minga y vení a poner el cuerpo, las manos y el corazón.</p></div>
      <div class="minga-selector">${mingas.map((minga, index) => `<a class="selector-card reveal" style="--delay:${index * 70}ms" href="#${minga.id}"><span class="selector-number">0${index + 1}</span><span class="selector-icon">${minga.icon}</span><strong>${minga.short}</strong><span class="selector-arrow">↗</span></a>`).join('')}</div>
    </section>

    <div class="minga-list">${mingas.map((minga, index) => `
      <section class="minga-section ${index % 2 ? 'reverse' : ''}" id="${minga.id}">
        <div class="minga-image reveal"><img src="${minga.image}" alt="Personas trabajando en comunidad en ${minga.short}" loading="lazy"><span class="image-label">MINGA 0${index + 1}</span></div>
        <div class="minga-copy reveal"><p class="kicker">${String(index + 1).padStart(2, '0')} / Territorio vivo</p><h2>${minga.title}</h2><p class="location">⌖ &nbsp;Barrio: <strong>${minga.neighborhood}</strong></p><div class="detail-grid"><div><h3>¿Qué vamos a hacer?</h3><ul>${minga.tasks.map(task => `<li>${task}</li>`).join('')}</ul></div><div><h3>¿Qué vas a aprender?</h3><p>${minga.learn}</p></div></div><div class="duration"><span>Duración</span><strong>${minga.duration}</strong></div><a class="button button-dark" href="${minga.driveUrl}" target="_blank" rel="noreferrer">Subir fotos y videos <span>↗</span></a></div>
      </section>`).join('')}</div>

    <section class="schedule section-shell" id="cronograma"><div class="section-intro reveal"><p class="kicker">02 / El ritmo de la jornada</p><h2>Tiempo para<br><em>encontrarnos.</em></h2><p>Una agenda común para trabajar, compartir y celebrar lo que hacemos juntos.</p></div><div class="schedule-grid"><article class="schedule-card reveal"><div class="day-label">SÁBADO <span>01</span></div><ul><li><time>09:00</time><span>Inicio de cada Minga</span></li><li><time>09—17:30</time><span>Jornada de trabajo</span></li><li><time>18:00</time><span>Encuentro</span></li><li><time>21:30</time><span>Cena</span></li><li><time>22:30</time><span>Minga Peña</span></li><li><time>00:30</time><span>Descanso</span></li></ul></article><article class="schedule-card Sunday reveal"><div class="day-label">DOMINGO <span>02</span></div><ul><li><time>09:00</time><span>Continuación del trabajo</span></li><li><time>12:30</time><span>Almuerzo</span></li><li><time>16:00</time><span>Regreso a la Base Minga</span></li><li><time>17:00</time><span>Encuentro final</span></li><li><time>18:00</time><span>Cierre</span></li></ul></article></div></section>

    <div class="closing-art" aria-hidden="true"><img src="${import.meta.env.BASE_URL}logos/logo-rover-blanco.svg" alt="" onerror="this.hidden=true"></div>
    <section class="join-section" id="sumate"><div class="join-inner reveal"><p class="kicker">03 / El territorio te espera</p><h2>Traé tus manos.<br><em>Lo demás lo hacemos juntos.</em></h2><p>Una herramienta, una idea, una canción. Todo suma cuando la comunidad se pone en movimiento.</p><a class="button button-light" href="https://drive.google.com/drive/folders/17HgD7aTf9BlxMwgI4ilRlbMmpNDWOhEi" target="_blank" rel="noreferrer">Ver carpetas de Mingas <span>↗</span></a></div></section>
  </main>
  <footer class="site-footer"><div class="footer-logo footer-scouts"><img src="${import.meta.env.BASE_URL}logos/zona%20celeste.png" alt="Scouts de Argentina Zona 2"></div><div class="footer-center"><p class="footer-title">MINGAS URBANAS<br><span>— ZONA 2 —</span></p><p class="footer-motto">“Nadie se salva solo. Toda salida para construir comunidad es colectiva.”</p></div><div class="footer-logo footer-anniversary"><img src="${import.meta.env.BASE_URL}logos/30%20a%C3%B1os%20SAAC.png" alt="30 años Scouts de Argentina"></div></footer>
`;

const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
