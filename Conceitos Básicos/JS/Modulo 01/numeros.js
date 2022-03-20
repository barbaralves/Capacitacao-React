const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

peso3 = 2.0

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso3
const media = total / (peso1 + peso3)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) //Binário
console.log(typeof media)
console.log(typeof Number) //Funcao

//JavaScipt tem um tipo infinito logo divisão por 0 ele retorna infinito
console.log(10 / 0)

//Consegue dividir string
console.log("8" / 4)

//String multiplicada da NaN (not a number)
console.log("Show!" * 2)

//Ponto flutuante pega uma precisão diferente
console.log(0.1 + 0.7) //retorna 0.799999...

//Não é possivel fazer operações toString direto no numero: console.log(10.toString())
//De forma indireta é possível: (10).toString
console.log((10).toFixed(2))
console.log((10).toString())