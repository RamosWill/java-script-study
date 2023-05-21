function calculo(dias) {
    let res = Number((dias * 0.002737851).toFixed(2));
    return res;
}

let botao = document.getElementById("confirm")
let numero = document.getElementById("dias")
let texto = document.getElementById("parag")



botao.addEventListener("click", function () {
    let inputValue = numero.value
    let anos = calculo(inputValue);

    if (isNaN(inputValue) || inputValue < 0) {
        texto.innerHTML = "ERRO! Insira um número válido."
    } else if (inputValue == 0) {
        texto.innerHTML = anos + " anos";
    } else {
        texto.innerHTML = anos + " anos!";
    }
});


