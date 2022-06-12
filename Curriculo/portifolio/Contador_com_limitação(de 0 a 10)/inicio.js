// Usamos "//" no inicio  ou "*/" no final para tornar a linha comentada.
// sempre lembrar de colocar ";" no final da linha, se nao nao vai funcionar
// var = variavel(valor pode ser alterado)
// const = constante(valor não pode ser alterado e deve ser declarado com um nome em caps look ex: const TESTE = 1;) 
// function = função(serve para acumular diversas atividades para que o codigo se torne mais simples)
let count = 0 

const NUMERO_INICIAL = document.getElementById('numero_inicial');

function increment() {
    if (count <= 9)
    count ++;
    NUMERO_INICIAL.innerHTML = count;
    

}

function decrement(){
    if (count >= 1)
    count --;
    NUMERO_INICIAL.innerHTML = count;
}

function test(){
    kdowdapo;
}