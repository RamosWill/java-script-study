import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de nomes a serem armazenados:');
let qtd = caixa();

console.log('\nInforme os nomes:')
let nomes = [];
for (let i = 0; i < qtd; i++) {
    nomes[i] = caixa();
}

console.log('\nOs nomes que começam com L são:')
for (let items of nomes) {
    if (items.charAt(0) == 'L' || items.charAt(0) == 'l') {
        console.log(items)
    }
}