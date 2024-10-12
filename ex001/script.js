function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<strong>Agora são ${hora} horas e ${minuto} minutos.</strong>`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotos/foto-manha.png'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE
        img.src = 'fotos/foto-tarde.png'
    } else {
        // BOA NOITE
        img.src = 'fotos/foto-noite.png'
    }
}