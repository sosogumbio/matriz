/*5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela. 
nome:Sophia Gumbio*/
console.clear();
let teclado = require('prompt-sync')();
// Declarando uma matriz 3x3
let matriz: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    // Inicializa cada linha da matriz
    matriz[i] = new Array(3);

    for (let j = 0; j < 3; j++) {
        // Solicita a entrada de um número para cada posição da matriz
        matriz[i][j] = parseFloat(teclado(`Digite o número para a posição [${i}][${j}]: `));
    }
}

// Exibe a matriz na tela
console.log('Matriz 3x3:');
for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join( )); // Exibe cada linha da matriz
}