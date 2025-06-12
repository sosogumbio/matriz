/*8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra. 
Nome: Sophia Gumbio*/

let teclado = require("prompt-sync")();
let matriz: number[][] = [];
let maior = -1;
let linhaMaior = 0;
let colunaMaior = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    let numero = parseInt(teclado(`digite um número de 0 a 20 para [" + i + "][" + j + "]: `));
    if (numero >= 0 && numero <= 20) {
      matriz[i][j] = numero;
      if (numero > maior) {
        maior = numero;
        linhaMaior = i;
        colunaMaior = j;
      }
    } else {
      console.log(`número inválido, digite mais uma vez.`);
      j--;
    }
  }
}

console.log(`matriz:`);
for (let i = 0; i < 3; i++) {
  console.log(matriz[i]);
}

console.log(`maior número:`, maior);
console.log(`posição:`, `[` + linhaMaior + `][` + colunaMaior + `]`);