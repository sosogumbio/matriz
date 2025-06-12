/*4- Altere o código dois(2) desse conteúdo para funcionar com números, 
faça o teste se o laço de repetição referente a linha da matriz chega criar 
a quarta linha,salve dessa forma e anexe a atividade o arquivo .ts e um print 
da tela do cmd(prompt command) com o resultado do teste. 
nome:Sphia Gumbio.*/
console.clear();
let teclado = require('prompt-sync')();
// Declarando matriz usando o construtor Array limitando a 3 linhas
let matrizDois: number[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    /* Cria um array vazio para preencher a linha correspondente ao índice i
    limitando a três linhas */
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 3; j++) {
        // Atribuição via entrada de dados manual na variável numero
        let numero: number = parseFloat(teclado(`Digite o número que vai estar no endereço [${i}][${j}] da matriz: `));

        // Atribuindo o número na matrizDois no endereço dado por i e j
        matrizDois[i][j] = numero;
    }
}

// Teste para verificar se o laço cria uma quarta linha
if (matrizDois[3]) {
    console.log('O laço criou uma quarta linha.');
} else {
    console.log('O laço NÃO criou uma quarta linha.');
}

// Imprime a matriz
console.log('Matriz final:');
console.log(matrizDois);