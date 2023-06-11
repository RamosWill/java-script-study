import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de números a serem armazenados');
let qtd = caixa();

let numeros = []  
for (let i = 0; i < qtd; i++) {
    numeros[i] = caixa();
}

for (let i = 0; i < qtd; i++) {
    console.log(`O dobro de ${numeros[i]} é ${numeros[i] * 2}`);
};