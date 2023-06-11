import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe um número:');
let numero = Number(caixa());

let tabuada = [];
for (let i = 0; i < 10; i++) {
    tabuada[i] = (numero * (i + 1));
};

console.log(`A tabuada de ${numero} é:`);
for (let items of tabuada) {
    console.log(items);
};