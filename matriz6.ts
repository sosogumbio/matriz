/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela. Nome: Sophia Gumbio.*/

let matriz: number[][] = [];
let teclado = require('prompt-sync')();

for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++) {
        let valor: number;
        do {
            valor = Number(teclado(`Digite um número entre 0 e 9 para posição [${linha}][${coluna}]: `));
        } while (valor < 0 || valor > 9);
        matriz[linha][coluna] = valor;
    }
}

console.log(`Matriz:`);
for (let linha = 0; linha < 3; linha++) {
    console.log(matriz[linha]);
}