import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe 5 Números')
let numeros = [];

for (let i = 0; i < 5; i++) {
    console.log(`Informe o ${i + 1} número`)
    numeros[i] = caixa();
}

console.log('\nVocê digitou os números:')
for (let items of numeros) {
    console.log(items)
};