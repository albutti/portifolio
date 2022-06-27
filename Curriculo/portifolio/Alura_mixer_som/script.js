var pom = document.querySelector('#som_tecla_pom');
var clap = document.querySelector('#som_tecla_clap');
var tim = document.querySelector('#som_tecla_tim'); 

var puff = document.querySelector('#som_tecla_puff');
var splash = document.querySelector('#som_tecla_splash');
var toim = document.querySelector('#som_tecla_toim');

var psh = document.querySelector('#som_tecla_psh');
var tic = document.querySelector('#som_tecla_tic');
var tom = document.querySelector('#som_tecla_tom');

function tocar_tom() {
    tom.play()
}

function tocar_tic() {
    tic.play()
}

function tocar_psh() {
    psh.play()
}

function tocar_toim() {
    toim.play()
}

function tocar_splash() {
    splash.play()
}

function tocar_puff() {
    puff.play()
}

function tocar_tim() {
    tim.play()
}

function tocar_clap() {
    clap.play()
}

function tocar_pom() {
    pom.play()
}

function toca_som(id) {
    if (id == 1) {
        pom.play()
    }
}