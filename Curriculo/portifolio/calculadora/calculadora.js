function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - Soma[+]\n 2 - Subtração[-]\n 3 - Multiplicação[*]\n 4 - Divisão Real[/]\n 5 Divisão Inteira[&]\n 6 - Potenciação[**]');

    let num1 = Number(prompt('Insira um numero valido:'));
    let num2 = Number(prompt('Insira outro número valido: '));
    let result;

    function soma(){
        result = num1 + num2
        alert(`${num1} + ${num2} = ${result}`)
        novaoperacao()
    }


    function subtracao(){
        result = num1 - num2
        alert(`${num1} - ${num2} = ${result}`)
        novaoperacao()
    }


    function multiplicacao(){
        result = num1 * num2
        alert(`${num1} * ${num2} = ${result}`)
        novaoperacao()
    }


    function diviint(){
        result = num1 / num2
        alert(`${num1} / ${num2} = ${result.toFixed(2)}`)
        novaoperacao()
    }


    function divreal(){
        result = num1 % num2
        alert(`${num1} % ${num2} = ${result}`)
        novaoperacao()
    }


    function potenciacao(){
        result = num1 ** num2
        alert(`${num1} ** ${num2} = ${result}`)
        novaoperacao()
    }

    function novaoperacao(){
        let opcao = prompt("deseja fazer mais alguma operação:\n 1 - Sim\n 2- Não");

        if (opcao == 1){
            calculadora()
        } else if (opcao == 2){
            alert("Isso foi tudo pessoal!")
        } else{
            alert("Digite uma opçãp Valida!")
            novaoperacao()
        }
    }

    if (operacao == 1){
        soma()
    } else if (operacao == 2){
        subtracao()
    } else if (operacao == 3){
        multiplicacao()
    } else if (operacao == 4){
        divreal()
    } else if (operacao == 5){
        diviint()
    } else if (operacao == 6){
        potenciacao()
    }
}


calculadora()
