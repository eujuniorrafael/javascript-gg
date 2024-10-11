var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break //Obrigatório
    case 1:
        console.log('Segunda')
        break //Obrigatório
    case 2:
        console.log('Terça')
        break //Obrigatório
    case 3:
        console.log('Quarta')
        break //Obrigatório
    case 4:
        console.log('Quinta')
        break //Obrigatório
    case 5:
        console.log('Sexta')
        break //Obrigatório
    case 6:
        console.log('Sábado')
        break //Obrigatório

}