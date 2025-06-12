/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz. Nome: Sophia Gumbio*/

let teclado = require("prompt-sync")();
let matriz: number[][] = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
  matriz[i] = [];
  for (let j = 0; j < 6; j++) {
    let numero = parseInt(teclado(`digite um número para [` + i + `][` + j + `]: `));
    matriz[i][j] = numero;
  }
}

console.log(`matriz:`);
for (let i = 0; i < 6; i++) {
  console.log(matriz[i]);
}

for (let j = 0; j < 6; j++) {
  if (j % 2 === 0) {
    for (let i = 0; i < 6; i++) {
      soma = soma + matriz[i][j];
    }
  }
}

console.log(`soma das colunas pares:`, soma);