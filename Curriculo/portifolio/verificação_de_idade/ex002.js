function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('p#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Varifique seus dados e tente novamente.')
    } else {
        var sexo = document.getElementsByName('txtres')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'utilitario_ex_002/crianca_m.jpg')
                //res.innerHTML = `Você é uma criança de ${idade} anos.`
            } else if (idade > 12 && idade < 18) {
                img.setAttribute('src', 'utilitario_ex_002/adolecente_m.jpg')
                //res.innerHTML = `Você é uma adolecente de ${idade} anos.`
            } else if (idade >= 18 && idade <= 50) { 
                img.setAttribute('src', 'utilitario_ex_002/Adulto_m.jpg')
                //res.innerHTML = `Você é uma mulher adulta de ${idade} anos.`
            } else if (idade > 50 && idade <= 100){
                img.setAttribute('src', 'utilitario_ex_002/idoso_m.jpg')
                //res.innerHTML = `Você é uma idosa de ${idade} anos.`
            } else {
                img.setAttribute('src', 'utilitario_ex_002/hora_extra.jpg')
                //res.innerHTML = `Você tem ${idade} anos. Já está fazendo hora extra!`
            }
        } else if(sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'utilitario_ex_002/crianca_f.jpg')
               // res.innerHTML = `Você é uma criança de ${idade} anos.`
            } else if (idade > 12 && idade < 18) {
                img.setAttribute('src', 'utilitario_ex_002/adolecente_f.jpg')
                //res.innerHTML = `Você é um homem adulto de ${idade} anos.`
            } else if (idade > 50 && idade <= 100) {
                img.setAttribute('src', 'utilitario_ex_002/idoso_f.jpg')
                //res.innerHTML = `Você é uma idoso de ${idade} anos.`
            } else {
                img.setAttribute('src', 'utilitario_ex_002/hora_extra.jpg')
                //res.innerHTML = `Você tem ${idade} anos. Já está fazendo hora extra!`
            }
        }
    res.style.textAlign= 'center'
    res.innerHTML = `Detectamos o gênero ${genero} de ${idade} anos.`
    res.appendChild(img)
    }
}