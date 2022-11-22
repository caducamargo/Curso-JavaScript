function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 0 && idade <= 10) {
                //Criança
                gênero = 'menino'
                img.setAttribute('src', 'foto-criança-masc.png')
            } else if (idade < 21) {
                //Jovem
                gênero = 'rapaz'
                img.setAttribute('src', 'foto-jovem-masc.png')
            } else if (idade < 50) {
                //Adulto
                gênero = 'homem'
                img.setAttribute('src', 'foto-adulto-masc.png')
            } else {
                //Idoso
                gênero = 'senhor'
                img.setAttribute('src', 'foto-idoso-masc.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade <= 10) {
                //Criança
                gênero = 'menina'
                img.setAttribute('src', 'foto-criança-fem.png')
            } else if (idade < 21) {
                //Jovem
                gênero = 'moça'
                img.setAttribute('src', 'foto-jovem-fem.png')
            } else if (idade < 50) {
                //Adulto
                gênero = 'mulher'
                img.setAttribute('src', 'foto-adulto-fem.png')
            } else {
                //Idoso
                gênero = 'senhora'
                img.setAttribute('src', 'foto-idoso-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
    }