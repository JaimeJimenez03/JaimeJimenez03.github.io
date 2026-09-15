/* ============================================================
   main.js — render del contenido + interacciones de la página
   ============================================================ */
(function () {
  'use strict';

  /* ---------- utilidades ---------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Escapa texto antes de inyectarlo como HTML
  const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const chips = (arr) =>
    `<ul class="chips">${arr.map((t) => `<li class="chip">${esc(t)}</li>`).join('')}</ul>`;

  /* ---------- 1. Stack ---------- */
  function renderStack() {
    const grid = $('#stack-grid');
    if (!grid) return;

    grid.innerHTML = STACK.map((bloque) => `
      <article class="card reveal">
        <h3 class="card__title">${esc(bloque.titulo)}</h3>
        <p class="card__text">${esc(bloque.descripcion)}</p>
        ${chips(bloque.tecnologias)}
      </article>
    `).join('');
  }

  /* ---------- 2. Proyectos + filtros ---------- */
  const ETIQUETAS = { todos: 'Todos', web: 'Web', movil: 'Móvil', backend: 'Backend' };

  function renderProyectos(categoria = 'todos') {
    const grid = $('#proyectos-grid');
    if (!grid) return;

    const lista = categoria === 'todos'
      ? PROYECTOS
      : PROYECTOS.filter((p) => p.categoria === categoria);

    if (lista.length === 0) {
      grid.innerHTML = '<p class="empty-state">Todavía no hay proyectos en esta categoría.</p>';
      return;
    }

    grid.innerHTML = lista.map((p) => {
      const enlaces = [
        p.demo  ? `<a class="project__link" href="${esc(p.demo)}"  target="_blank" rel="noopener">Ver demo ↗</a>` : '',
        p.sitio ? `<a class="project__link" href="${esc(p.sitio)}" target="_blank" rel="noopener">Web ↗</a>` : '',
        p.repo  ? `<a class="project__link" href="${esc(p.repo)}"  target="_blank" rel="noopener">Código ↗</a>` : ''
      ].filter(Boolean).join('');

      const puntos = (p.puntos && p.puntos.length)
        ? `<ul class="project__points">${p.puntos.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`
        : '';

      const media = (p.imagenes && p.imagenes.length)
        ? `<div class="project__media">${p.imagenes.map((src, i) => `
             <img class="project__shot" src="${esc(src)}" alt="Captura de ${esc(p.titulo)}"
                  loading="lazy" decoding="async" width="1280" height="2856"
                  style="--i:${i}">`).join('')}
           </div>`
        : '';

      return `
        <article class="card project reveal${p.destacado ? ' project--destacado' : ''}">
          ${media}
          <div class="project__head">
            <h3 class="card__title">${esc(p.titulo)}</h3>
            <span class="project__year">${esc(p.anio)}</span>
          </div>
          ${p.subtitulo ? `<p class="project__subtitle">${esc(p.subtitulo)}</p>` : ''}
          ${p.estado ? `<p class="project__status">${esc(p.estado)}</p>` : ''}
          <p class="card__text">${esc(p.descripcion)}</p>
          ${puntos}
          ${chips(p.tecnologias)}
          ${enlaces ? `<div class="project__links">${enlaces}</div>` : ''}
        </article>
      `;
    }).join('');

    observarReveals();
  }

  function renderFiltros() {
    const cont = $('#filtros');
    if (!cont) return;

    const categorias = ['todos', ...new Set(PROYECTOS.map((p) => p.categoria))];

    cont.innerHTML = categorias.map((cat, i) => `
      <button type="button" class="filter${i === 0 ? ' is-active' : ''}" data-filtro="${esc(cat)}">
        ${esc(ETIQUETAS[cat] || cat)}
      </button>
    `).join('');

    cont.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      $$('.filter', cont).forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderProyectos(btn.dataset.filtro);
    });
  }

  /* ---------- 3. Trayectoria ---------- */
  function renderTrayectoria() {
    const lista = $('#timeline');
    if (!lista) return;

    lista.innerHTML = TRAYECTORIA.map((item) => `
      <li class="timeline__item reveal">
        <p class="timeline__period">${esc(item.periodo)}</p>
        <h3 class="timeline__title">${esc(item.titulo)}</h3>
        <p class="timeline__place">${esc(item.lugar)}</p>
        ${item.texto ? `<p class="timeline__text">${esc(item.texto)}</p>` : ''}
      </li>
    `).join('');
  }

  /* ---------- 4. Tema claro / oscuro ---------- */
  function initTema() {
    const btn = $('#theme-toggle');
    const icono = $('[data-theme-icon]');
    const guardado = localStorage.getItem('tema');
    const prefiereClaro = window.matchMedia('(prefers-color-scheme: light)').matches;
    let tema = guardado || (prefiereClaro ? 'light' : 'dark');

    const aplicar = () => {
      document.documentElement.setAttribute('data-theme', tema);
      if (icono) icono.textContent = tema === 'dark' ? '☾' : '☀';
    };
    aplicar();

    btn?.addEventListener('click', () => {
      tema = tema === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tema', tema);
      aplicar();
    });
  }

  /* ---------- 5. Menú móvil ---------- */
  function initMenu() {
    const toggle = $('#nav-toggle');
    const nav = $('#nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const abierto = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(abierto));
      toggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('.nav__link')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 6. Cabecera con sombra + enlace activo ---------- */
  function initScroll() {
    const header = $('#header');
    const enlaces = $$('.nav__link');
    const secciones = enlaces
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const onScroll = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 10);

      const y = window.scrollY + 120;
      let actual = null;
      secciones.forEach((sec) => { if (sec.offsetTop <= y) actual = sec.id; });
      enlaces.forEach((a) =>
        a.classList.toggle('is-active', a.getAttribute('href') === `#${actual}`)
      );
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 7. Animaciones al entrar en pantalla ---------- */
  let observer;
  function observarReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    observer = observer || new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    $$('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
  }

  /* ---------- Arranque ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTema();
    renderStack();
    renderFiltros();
    renderProyectos();
    renderTrayectoria();
    initMenu();
    initScroll();
    observarReveals();

    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
