/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela. Nome:Sophia Gumbio*/

let teclado = require(`prompt-sync`)();
let matriz: number[][] = [];

for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    let numero = parseInt(teclado(`digite um número de 0 a 9 para [` + i + `][` + j + `]: `));
    if (numero >= 0 && numero <= 9) {
      matriz[i][j] = numero;
    } else {
      console.log(`número inválido, digite de novo.`);
      j--; 
    }
  }
}

console.log(`matriz final:`);
for (let i = 0; i < 3; i++) {
  console.log(matriz[i]);
}