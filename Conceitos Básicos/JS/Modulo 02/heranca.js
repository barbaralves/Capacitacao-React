const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj() { }
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)

// cadeia de prototipos
Object.prototype.attr0 = '0' //não fazer

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1, filho.attr3)
console.log(filho.attr0)
console.log(filho.attrA)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari2, carro)
Object.setPrototypeOf(volvo2, carro)

console.log(ferrari2)
console.log(volvo2)

volvo2.acelerarMais(100)
console.log(volvo2.status())

ferrari2.acelerarMais(300)
console.log(ferrari2.status())

const pai1 = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai1, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const objeto1 = new MeuObjeto
const objeto2 = new MeuObjeto

console.log(objeto1.__proto__ === objeto2.__proto__)
console.log(MeuObjeto.prototype === objeto2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! MEu nome é ${this.nome}!`)
}

objeto1.falar()

objeto2.nome = 'Rafael'
objeto2.falar()

const objeto3 = {}
objeto3.__proto__ = MeuObjeto.prototype
objeto3.nome = 'Objeto3'
objeto3.falar()

//Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Coder'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola'.reverse())

function Aula(nome, videoID){
    this.nome = nome,
    this,videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simula o new
function novo(f, ...params) {
    const object = {}
    object.__proto__ = f.prototype
    f.apply(object, params)
    return object
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)