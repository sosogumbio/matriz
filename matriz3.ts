/*3- Altere o código um(1) desse conteúdo para funcionarcom números e ter duas colunas. 
nome: Sophia Gumbio.*/

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = []; // matriz de numeros

let linha: number = parseInt(teclado('Digite o numero de linhas da matriz: '));
let coluna: number = 2; //fixo para duas colunas

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = []; //inicializa a linha

    for(let x = 0; x < coluna; x++){
        let numero: number = parseFloat(teclado(`Digite o número para a posição [$(z)], $(x)]: `));
        minhaMatriz[z][x] = numero;
    }
}

console.log("Matriz final:");
console.log(minhaMatriz);