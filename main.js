// ---------- Tema claro / oscuro ----------
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

function setTheme(t) {
  root.dataset.theme = t;
  toggle.setAttribute("aria-label", t === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  try { localStorage.setItem("tema", t); } catch (e) {}
}
toggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
setTheme(root.dataset.theme || "dark");

// ---------- Foto (si existe el archivo, reemplaza las iniciales) ----------
const avatar = document.querySelector(".avatar");
if (avatar?.dataset.src) {
  const img = new Image();
  img.alt = "Emmanuel Aristov";
  img.onload = () => { avatar.innerHTML = ""; avatar.appendChild(img); };
  img.src = avatar.dataset.src;
}

// ---------- Proyectos ----------
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function renderProject(p) {
  const imgs = p.imagenes || [];
  const media = imgs.length
    ? `<div class="project__media">
         <img class="main-img" src="${esc(imgs[0].src)}" alt="${esc(imgs[0].alt)}" loading="lazy" />
         ${imgs.length > 1 ? `<div class="thumbs">${imgs.map((im, i) =>
            `<button type="button" aria-label="Ver imagen ${i + 1}" aria-current="${i === 0}" data-i="${i}">
               <img src="${esc(im.src)}" alt="" loading="lazy" />
             </button>`).join("")}</div>` : ""}
       </div>`
    : "";

  return `
    <article class="project reveal">
      ${media}
      <div class="project__body">
        <div class="project__meta">
          ${p.fecha ? `<b>${esc(p.fecha)}</b>` : ""}
          ${p.contexto ? `<span>${esc(p.contexto)}</span>` : ""}
        </div>
        <h3>${esc(p.titulo)}${p.subtitulo ? `<small>${esc(p.subtitulo)}</small>` : ""}</h3>
        ${p.descripcion ? `<p>${esc(p.descripcion)}</p>` : ""}
        ${p.destacados?.length ? `<ul>${p.destacados.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        ${p.tags?.length ? `<div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
        ${p.links?.length ? `<div class="project__links">${p.links.map((l) =>
            `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.texto)} ↗</a>`).join("")}</div>` : ""}
      </div>
    </article>`;
}

const list = document.getElementById("projectList");
list.innerHTML = (window.PROYECTOS || PROYECTOS).map(renderProject).join("");

// Galería: miniaturas + visor
const lightbox = document.getElementById("lightbox");
const lbImg = lightbox.querySelector("img");
const lbCap = lightbox.querySelector(".lightbox__caption");

list.querySelectorAll(".project").forEach((card, idx) => {
  const imgs = PROYECTOS[idx].imagenes || [];
  const main = card.querySelector(".main-img");
  if (!main) return;
  let current = 0;
  card.querySelectorAll(".thumbs button").forEach((b) =>
    b.addEventListener("click", () => {
      current = +b.dataset.i;
      main.src = imgs[current].src;
      main.alt = imgs[current].alt;
      card.querySelectorAll(".thumbs button").forEach((x) => x.setAttribute("aria-current", x === b));
    })
  );
  main.addEventListener("click", () => {
    lbImg.src = imgs[current].src;
    lbImg.alt = imgs[current].alt;
    lbCap.textContent = imgs[current].alt;
    lightbox.showModal();
  });
});
lightbox.addEventListener("click", (e) => { if (e.target !== lbImg) lightbox.close(); });

// ---------- Animación al hacer scroll ----------
document.querySelectorAll(".section, .timeline > li, .skill-group").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
