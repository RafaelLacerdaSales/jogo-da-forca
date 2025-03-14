const btn = document.querySelector(".btn");
const tentativaInput = document.getElementById("palavra");
const letras_certas = document.getElementById("letras_certas");
const letras_erradas = document.getElementById("letras_erradas");
const palavraSecreta = "oi";
const tentativasMax = 6;
const tentativas = document.getElementById("tentativas_numero");
const venceu = document.querySelector(".vitoria");
const perdeu = document.querySelector(".perdeu");

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
    tentativas.innerHTML = tentativasRestantes;
  }

  letras_certas.innerHTML = letrasCorretas.join(", ");
  letras_erradas.innerHTML = letrasErradas.join(", ");

  if (!letrasCorretas.includes("_")) {
    // console.log(`Parabéns! Você acertou: ${palavraSecreta}`);
    venceu.style.display = "block";
  } else if (tentativasRestantes === 0) {
    perdeu.style.display = "block";
  }
});
