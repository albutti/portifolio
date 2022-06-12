var jogador1 = window.prompt('Jogador 1:');
var jogador2 = window.prompt('Jogador 2:');
var jogador, vencedor = null;
var jogador_selecionado = document.getElementById('jogador-selecionado');
var vencedor_selecionado = document.getElementById('vencedor-selecionado');

mudar_jogador('X');


function escolher_quadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudar_jogador(jogador);
    checa_vencedor();
}

function mudar_jogador(valor) {
    jogador = valor;
    jogador_selecionado.innerHTML = jogador;
}

function checa_vencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    
    if (checa_sequencia(quadrado1, quadrado2, quadrado3)) {
        muda_cor(quadrado1, quadrado2, quadrado3);
        mudar_vencedor(quadrado1);
        return;
    }else if(checa_sequencia(quadrado4, quadrado5, quadrado6)) {
        muda_coro(quadrado4, quadrado5, quadrado6);
        mudar_vencedor(quadrado4);
        return;
    }else if(checa_sequencia(quadrado7, quadrado8, quadrado9)) {
        muda_cor(quadrado7, quadrado8, quadrado9);
        mudar_vencedor(quadrado7);
        return;
    }else if(checa_sequencia(quadrado1, quadrado4, quadrado7)) {
        muda_cor(quadrado1, quadrado4, quadrado7);
        mudar_vencedor(quadrado1);
        return;
    }else if(checa_sequencia(quadrado2, quadrado5, quadrado8)) {
        muda_cor(quadrado2, quadrado5, quadrado8);
        mudar_vencedor(quadrado2);
        return;
    }else if(checa_sequencia(quadrado3, quadrado6, quadrado9)) {
        muda_cor(quadrado3, quadrado6, quadrado9);
        mudar_vencedor(quadrado3);
        return;
    }else if(checa_sequencia(quadrado1, quadrado5, quadrado9)) {
        muda_cor(quadrado1, quadrado5, quadrado9);
        mudar_vencedor(quadrado1);
        return;
    }else if(checa_sequencia(quadrado3, quadrado5, quadrado7)) {
        muda_cor(quadrado3, quadrado5, quadrado7);
        mudar_vencedor(quadrado3);   
    }
} 

function mudar_vencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    if (vencedor == 'X'){
        vencedor_selecionado.innerHTML = jogador1;
    } else {
        vencedor_selecionado.innerHTML = jogador2;
    }
}

function muda_cor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checa_sequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedor_selecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#afafaf';
        quadrado.style.color = '#afafaf';
        quadrado.innerHTML = '-';
    }
    jogador1 = window.prompt('Jogador 1:');
    jogador2 = window.prompt('Jogador 2:');
    mudar_jogador('X');
}