<script>
  function respuesta(correcta) {
    const r = document.getElementById("resultado");
    r.textContent = correcta
      ? "✅ Correcto. El plástico es el principal contaminante."
      : "❌ Incorrecto. Intenta de nuevo.";
    r.style.color = correcta ? "green" : "red";
    // ocultar botones al terminar
const botones = preguntasDiv.querySelectorAll("button");
botones.forEach(btn => btn.style.display = "none");

  }

  // ===== FONDO ALEATORIO SIN SUPERPOSICIÓN =====
  const fondo = document.getElementById("fondoDecorativo");

  const cols = Math.floor(window.innerWidth / 150);
  const rows = Math.floor(document.body.scrollHeight / 150);

  let posiciones = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      posiciones.push({
        left: x * 150 + 15,
        top: y * 150 + 15
      });
    }
  }

  posiciones.sort(() => Math.random() - 0.5);

  function crearImg(src, rotar) {
    if (posiciones.length === 0) return;

    const pos = posiciones.pop();
    const img = document.createElement("img");
    img.src = src;
    img.style.left = pos.left + "px";
    img.style.top = pos.top + "px";

    if (rotar) {
      img.style.transform = `rotate(${Math.random() * 360}deg)`;
    }

    fondo.appendChild(img);
  }

  const peces = Math.floor(Math.random() * 8) + 8; // 8–15
  const burbujas = Math.floor(Math.random() * 5) + 5; // 5–10

  for (let i = 0; i < peces; i++) {
    crearImg(
      Math.random() > 0.5
        ? "img/fish fondo1.png"
        : "img/fish fondo2.png",
      true
    );
  }

  for (let i = 0; i < burbujas; i++) {
    crearImg("img/burbujas.png", false);
  }
</script>
const elementos = document.querySelectorAll(
  'h1, h2, h3, p, img, .card, button'
);

elementos.forEach(el => el.classList.add('animar'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

elementos.forEach(el => observer.observe(el));
