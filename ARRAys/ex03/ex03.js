import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de números a serem armazenados: ');
let qtd = Number(caixa());

console.log('Informe os números')
let numeros = [];
for (let i = 0; i < qtd; i++) {
    numeros[i] = Number(caixa());
}


console.log('\nOs números informados foram:');
for (let items of numeros) {
    console.log(items);
}