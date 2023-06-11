import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade notas:')
let qtd = caixa();

console.log('Informe as notas')
let notas = [];

for (let i = 0; i < qtd; i++) {
    notas[i] = caixa();
}

let counter = 1
for (let items of notas) {
    if (counter < notas.length) {
        process.stdout.write(items + '-')
    } else if (counter == notas.length) {
        process.stdout.write(items);
        console.log();
    }
    counter++
}

console.log('A maior nota é:');

let verificacao = notas[0];
for (let items of notas) {
    if (items > verificacao) {
        verificacao = items;
    }
}
console.log(verificacao);