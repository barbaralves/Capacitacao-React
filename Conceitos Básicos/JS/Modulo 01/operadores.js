// Atribuição
const a = 7
let b = 3

b += a // b = b + a
console.log(b)

b -= 4 // b = b - 4
console.log(b)

b *= 2 // b = b * 2
console.log(b)

b /= 2 // b = b / 2
console.log(b)

b %= 2 // b = b % 2
console.log(b)

// Destructuring
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua',
        numero: 10
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const {conta: {ag, num}} = pessoa
//console.log(ag, num)

// Destructuring - array
const [s] = [10]
console.log(s)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

// Destructuring - funcao
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

// Destructuring - array/funcao
function rand2([min = 0, max = 1000]) {
    if (min > max)
        [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))

// Aritméticos
const [a1, a2, a3, a4] = [3, 5, 1, 15]

const soma = a1 + a2 + a3 + a4
const subtracao = a4 - a2
const multiplicacao = a1 * a2
const divisao = a4 / a1
const modulo = a1 % 2
const exponencial = a1 ** 2
console.log(soma, subtracao, multiplicacao, divisao, modulo, exponencial)

// Relacionais
console.log('01) ', '1' == 1)
console.log('02) ', '1' === 1)
console.log('03) ', '3' != 3)
console.log('04) ', '3' !== 3)
console.log('05) ', 3 < 2)
console.log('06) ', 3 > 2)
console.log('07) ', 3 <= 2)
console.log('08) ', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09) ', d1 == d2)
console.log('10) ', d1 === d2)
console.log('11) ', d1.getTime() === d2.getTime())
console.log('12) ', undefined == null)
console.log('13) ', undefined === null)

// Lógicos
function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2 // ou
    const comprarTv50 = trab1 && trab2 // e
    //const comprarTv32 = !!(trab1 ^ trab2) // bitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// Unários
let num1 = 1, num2 = 2

num1++ // num = num + 1
console.log(num1)

--num1 // num = num - 1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

// Ternários
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))