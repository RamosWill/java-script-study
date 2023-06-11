import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de números a serem armazenados:');
let qtd = Number(caixa());

let numeros = [];
let dobro = [];

for (let i = 0; i < qtd; i++) {
    numeros[i] = Number(caixa());
}

for (let i = 0; i < qtd; i++) {
    dobro[i] = numeros[i] * 2;
}

console.log('Os números que você adicionou foram:')
for (let items of numeros) {
    console.log(items)
}

console.log('O dobro destes números são:')
for (let items of dobro) {
    console.log(items);
}