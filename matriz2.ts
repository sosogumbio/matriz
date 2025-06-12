console.clear();
let teclado = require(`prompt-sync`)();
// declarando matriz usando o contrutor Array limitando a 3 linhas
let matrizDois: string[][] = new Array(3);

for (let i = 0; i < 3; i++) {
    /* Cria um array vazio para preencher a linha correspondente ao 1
    limitando a três linhas */
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 4; j++) {
        // Atribuição via entrada de dados manual na variavel nome
        let nome: string = teclado(`Digite o nome que vai estar no endereço [,${i}][${j}]
                                    da matriz: `)

        // Atribuindo o nome na minhaMatriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
// Imprime a matriz
console.log(matrizDois);
