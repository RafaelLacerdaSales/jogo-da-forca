const btn = document.querySelector(".btn");
const tentativaInput = document.getElementById("palavra");
const letras_certas = document.getElementById("letras_certas");
const palavraSecreta = "javascript";
const tentativasMax = 6;

let tentativasRestantes = tentativasMax;

let letrasCorretas = Array(palavraSecreta.length).fill("_");
let letrasErradas = [];

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const tentativa = tentativaInput.value.toLowerCase();
  tentativaInput.value = "";
  if (letrasCorretas.includes(tentativa) || letrasErradas.includes(tentativa)) {
    console.log("Você já tentou essa letra!");
    return;
  }

  if (palavraSecreta.includes(tentativa)) {
    for (let i = 0; i < palavraSecreta.length; i++) {
      if (palavraSecreta[i] === tentativa) {
        letrasCorretas[i] = tentativa;
      }
    }
  } else {
    letrasErradas.push(tentativa);
    tentativasRestantes--;
  }

  letras_certas.innerHTML = letrasCorretas.join(", ");
  console.log(`Letras erradas: ${letrasErradas.join(", ")}`);
  console.log(`Tentativas restantes: ${tentativasRestantes}`);

  if (!letrasCorretas.includes("_")) {
    console.log(`Parabéns! Você acertou: ${palavraSecreta}`);
  } else if (tentativasRestantes === 0) {
    console.log(`Fim de jogo! A palavra era: ${palavraSecreta}`);
  }
});
