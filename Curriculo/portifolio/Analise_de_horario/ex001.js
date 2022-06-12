//window.alert('Sejá bem vindo ao Ex001!')
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} : ${min}.`
    if (hora >= 6 && hora < 12) {
        img.src = 'utilitario_ex_001/manha.jpg'
        document.body.style.background = '#ff8c00'
        msg2.innerHTML = ('Tenho uma boa manhã.')
    } else if (hora == 12) {
        img.src = 'utilitario_ex_001/meio_dia.jpg'
        document.body.style.background = '#00bfff'
        msg2.innerHTML = ('Tenho uma boa dia.')
    } else if(hora > 12 && hora <= 19) {
        img.src = 'utilitario_ex_001/tarde.jpg'
        document.body.style.background = '#ff7f50'
        msg2.innerHTML = ('Tenho uma boa tar.')
    } else if (hora > 19 && hora < 24) {
        img.src = 'utilitario_ex_001/noite.jpg'
        document.body.style.background = '#000080'
        msg2.innerHTML = ('Tenho uma boa noite.')
    } else if (hora == 24 || hora == 0) {
        img.src = 'utilitario_ex_001/meia_noite.jpg'
        document.body.style.background = '#2f4f4f'
        msg2.innerHTML = ('Tenho uma boa noite.')
    } else {
        img.src = 'Utilitario_ex_001/madrugada.jpg'
        document.body.style.background = '#2f4f4f'
        msg2.innerHTML = ('Tenho uma boa madrugada.')
    }
}                     