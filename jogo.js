const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

document.getElementById("enviarPalpite").addEventListener("click", function() {
  const palpiteAtual = Number(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");

  if (tentativas >= 5) {
    resultado.textContent = `Desculpe, você excedeu o limite de tentativas. O número secreto era: ${numeroSecreto}`;
  } else {
    if (palpiteAtual === numeroSecreto) {
      resultado.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas + 1} tentativas.`;
    } else if (palpiteAtual < numeroSecreto) {
      resultado.textContent = 'Dica: O número é maior.';
    } else {
      resultado.textContent = 'Dica: O número é menor.';
    }

    tentativas++;
  }
});

