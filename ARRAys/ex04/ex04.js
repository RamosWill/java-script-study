import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de números a serem armazenadas:\n');
let qtd = Number(caixa());

console.log('Insira os números:')
let numeros = [];
for (let i = qtd - 1; i >= 0; i--) {
    numeros[i] = Number(caixa());
}


console.log('Os números inseridos foram:')
for (let items of numeros) {
    console.log(items);
}
console.log(numeros)


// Dessa forma o array continua seguindo a ordem normal digitada, no array acima os valores foram invertidos.
// for (let i = 0; i < qtd; i++) {
//     numeros[i] = Number(caixa());
// }


// for (let i = numeros.length; i >= 0; i--) {
//     console.log(numeros[i]);
// }