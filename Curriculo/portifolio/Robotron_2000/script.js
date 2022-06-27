var val_forca = document.getElementById('forca');
var val_poder = document.getElementById('poder');
var val_energia = document.getElementById('energia');
var val_velocidade = document.getElementById('velocidade');

var val_ponto_braco = document.getElementById('valor_braco');
var val_ponto_blindagem = document.getElementById('valor_blindagem');
var val_ponto_nucleo = document.getElementById('valor_nucleos');
var val_ponto_perna = document.getElementById('valor_pernas');
var val_ponto_foguete = document.getElementById('valor_foguete');

var valor_forca = 0;
var valor_energia = 0;
var valor_velocidade = 0;
var valor_poder = 0;

var valor_ponto_braco = 0;
var valor_ponto_blindagem = 0;
var valor_ponto_nucleo = 0;
var valor_ponto_pernas = 0;
var valor_ponto_foguetes = 0;

function melhora_braco() {
    valor_ponto_braco ++;
    val_ponto_braco.innerHTML = valor_ponto_braco;
    valor_forca = valor_forca + 29;
    val_forca.innerHTML = valor_forca;
    valor_poder = valor_poder + 35;
    val_poder.innerHTML = valor_poder;
    valor_energia = valor_energia - 21;
    val_energia.innerHTML = valor_energia;
    valor_velocidade = valor_velocidade - 5;
    val_velocidade.innerHTML = valor_velocidade;
}

function melhora_blindagem() {
    valor_ponto_blindagem ++;
    val_ponto_blindagem.innerHTML = valor_ponto_blindagem;
    valor_forca = valor_forca + 41;
    val_forca.innerHTML = valor_forca;
    valor_poder = valor_poder + 20;
    val_poder.innerHTML = valor_poder;
    valor_velocidade = valor_velocidade - 20;
    val_velocidade.innerHTML = valor_velocidade;
}

function melhora_nucleos() {
    valor_ponto_nucleo ++;
    val_ponto_nucleo.innerHTML = valor_ponto_nucleo;
    valor_poder = valor_poder + 7;
    val_poder.innerHTML = valor_poder;
    valor_energia = valor_energia + 48;
    val_energia.innerHTML = valor_energia;
    valor_velocidade = valor_velocidade -24;
    val_velocidade.innerHTML = valor_velocidade;
}

function melhora_pernas() {
    valor_ponto_pernas ++;
    val_ponto_perna.innerHTML = valor_ponto_pernas;
    valor_forca = valor_forca + 27;
    val_forca.innerHTML = valor_forca;
    valor_poder = valor_poder + 21;
    val_poder.innerHTML = valor_poder;
    valor_energia = valor_energia - 32;
    val_energia.innerHTML = valor_energia;
    valor_velocidade = valor_velocidade + 42;
    val_velocidade.innerHTML = valor_velocidade;
}

function melhora_foguetes() {
    valor_ponto_foguetes ++;
    val_ponto_foguete.innerHTML = valor_ponto_foguetes;
    valor_poder = valor_poder + 28;
    val_poder.innerHTML = valor_poder;
    valor_velocidade = valor_velocidade - 2;
    val_velocidade.innerHTML = valor_velocidade;
}

function diminui_braco() {
    if (valor_ponto_braco > 0){
        valor_ponto_braco --;
        val_ponto_braco.innerHTML = valor_ponto_braco;
        valor_forca = valor_forca - 29;
        val_forca.innerHTML = valor_forca;
        valor_poder = valor_poder - 35;
        val_poder.innerHTML = valor_poder;
        valor_energia = valor_energia + 21;
        val_energia.innerHTML = valor_energia;
        valor_velocidade = valor_velocidade + 5;
        val_velocidade.innerHTML = valor_velocidade;
    }
    
}

function diminui_blindagem() {
    if (valor_ponto_blindagem > 0){
        valor_ponto_blindagem --;
        val_ponto_blindagem.innerHTML = valor_ponto_blindagem;
        valor_forca = valor_forca - 41;
        val_forca.innerHTML = valor_forca;
        valor_poder = valor_poder - 20;
        val_poder.innerHTML = valor_poder;
        valor_velocidade = valor_velocidade + 20;
        val_velocidade.innerHTML = valor_velocidade;
    }
}
    

function diminui_nucleos() {
    if (valor_ponto_nucleo > 0){
        valor_ponto_nucleo --;
        val_ponto_nucleo.innerHTML = valor_ponto_nucleo;
        valor_poder = valor_poder - 7;
        val_poder.innerHTML = valor_poder;
        valor_energia = valor_energia - 48;
        val_energia.innerHTML = valor_energia;
        valor_velocidade = valor_velocidade + 24;
        val_velocidade.innerHTML = valor_velocidade;
    } 
}

function diminui_pernas() {
    if (valor_ponto_pernas > 0) {
        valor_ponto_pernas --;
        val_ponto_perna.innerHTML = valor_ponto_pernas;
        valor_forca = valor_forca - 27;
        val_forca.innerHTML = valor_forca;
        valor_poder = valor_poder - 21;
        val_poder.innerHTML = valor_poder;
        valor_energia = valor_energia + 32;
        val_energia.innerHTML = valor_energia;
        valor_velocidade = valor_velocidade - 42;
        val_velocidade.innerHTML = valor_velocidade;
    }   
}

function diminui_foguetes() {
    if (valor_ponto_foguetes > 0){
        valor_ponto_foguetes --;
        val_ponto_foguete.innerHTML = valor_ponto_foguetes;
        valor_poder = valor_poder - 28;
        val_poder.innerHTML = valor_poder;
        valor_velocidade = valor_velocidade + 2;
        val_velocidade.innerHTML = valor_velocidade;
    }  
}