function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente noamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute ('src', 'fotos/criança-homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('src', 'fotos/jovem-homem.png')
            } else if (idade < 50) {
                // ADulto
                img.setAttribute ('src', 'fotos/adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute ('src', 'fotos/idoso-homem.png')
            }
        } else {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute ('src', 'fotos/criança-mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('src', 'fotos/jovem-mulher.png')
            } else if (idade < 50) {
                // ADulto
                img.setAttribute ('src', 'fotos/adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute ('src', 'fotos/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.padding = '15px'
     }
}