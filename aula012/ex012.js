var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}h${minutos}min`)
if (hora < 12) {
    console.log('Bom dia!')
    console.log(`Agora são exatamente ${hora}h`)
} else if (hora <= 18) {
    console.log('Boa tarde!')
    console.log(`Agora são exatamente ${hora}h`)
} else if (hora >= 18) {
    console.log('Boa noite!')
    console.log(`Agora são exatamente ${hora}h`)
} else if (hora > 0) {
    console.log('Boa madrugada!')
    console.log(`Agora são exatamente ${hora}h`)
}