import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe 5 nomes!\n');
let nomes = [];

for (let i = 0; i < 5; i++) {
    console.log(`Informe o ${i + 1}° nome:`)
    nomes[i] = caixa();
}

console.log('Os nomes informados foram: ')
for (let items of nomes) {
    console.log(items);
};