import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de notas:');
let qtd = caixa();

console.log('Informe as notas:')
let notas = []
for (let i = 0; i < qtd; i++) {
    notas[i] = caixa();
}


let soma = Number(0)
for (let items of notas) {
    soma = Number(items) + soma;
}

console.log('As notas digitadas são:')
let counter = 1;
for (let items of notas) {
    if (counter < notas.length) {
        process.stdout.write(items + '-')
    } else if (counter == notas.length) {
        process.stdout.write(items);
        console.log();
    }
    counter++
}

let media = soma / notas.length;
console.log('A media entre esses números é:')
console.log(media);