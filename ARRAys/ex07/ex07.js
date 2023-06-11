import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de números a serem armazenados:')
let qtd = caixa();

let numeros = []
for (let i = 0; i < qtd; i++) {
    numeros[i] = caixa();
}

console.log('Os números foram:')
for (let items of numeros) {
    console.log(items);
}

console.log('Os pares são:')
for (let items of numeros) {
    if (items % 2 == 0) {
        console.log(items)
    }
};

