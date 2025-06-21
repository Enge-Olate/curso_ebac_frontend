function gerarNumeroAleatorio(min, max) {
  // Garante que min e max sejam números e que min seja menor ou igual a max
  min = Math.ceil(min); // Arredonda para cima para garantir um número inteiro
  max = Math.floor(max); // Arredonda para baixo para garantir um número inteiro

  // Retorna um número inteiro aleatório entre min (inclusive) e max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemplos de uso:

// Gerar um número aleatório entre 1 e 10 (inclusive)
let num1 = gerarNumeroAleatorio(1, 10);
console.log(`Número aleatório entre 1 e 10: ${num1}`); // Ex: 5

// Gerar um número aleatório entre 50 e 100 (inclusive)
let num2 = gerarNumeroAleatorio(50, 100);
console.log(`Número aleatório entre 50 e 100: ${num2}`); // Ex: 78

// Gerar um número aleatório entre 0 e 1 (inclusive)
let num3 = gerarNumeroAleatorio(0, 1);
console.log(`Número aleatório entre 0 e 1: ${num3}`); // Ex: 0 ou 1

// Se você precisar de um número aleatório de ponto flutuante (não inteiro)
function gerarNumeroAleatorioFlutuante(min, max) {
  return Math.random() * (max - min) + min;
}

// Exemplo de uso para número flutuante
let numFlutuante = gerarNumeroAleatorioFlutuante(0, 1);
console.log(`Número aleatório flutuante entre 0 e 1: ${numFlutuante}`); // Ex: 0.78912345