{ { { { var sera = 'Sera' } } } }
console.log(sera)

function teste (){
    var local = 123
}

teste()
//console.log(local)

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
