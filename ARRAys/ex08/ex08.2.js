import prompt from 'prompt-sync';
let caixa = prompt();

console.log('Informe a quantidade de nomes a serem armazenados');
let quantidade = caixa();

console.log('Informe os nomes:')
let nomes = [];
for (let i = 0; i < quantidade; i++) {
    nomes[i] = caixa();
}

console.log('Os nomes que iniciam com H ou L são:')
for (let items of nomes) {
    if (items.charAt(0) == 'L' 
     || items.charAt(0) == 'l' 
     || items.charAt(0) == 'H' 
     || items.charAt(0) == 'h') {
        console.log(items);
    }
}