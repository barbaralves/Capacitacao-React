interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Hermione'
}

const pessoa: Humano = {
  nome: 'Draco',
  idade: 27,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é '
      + this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: 'Jonas', idade: 27, altura: true })
pessoa.saudar('Malfoy')

// Usando Classes..
class Cliente implements Humano {
  nome: string = ''
  ultimoContato: Date = new Date
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é '
      + this.nome + ' ' + sobrenome
    )}
}

const meuCliente = new Cliente()
meuCliente.nome = 'Tom'
saudarComOla(meuCliente)
meuCliente.saudar('Riddle')
console.log(meuCliente.ultimoContato)

// Interface função
interface FuncaoCalculo {
  (a: number, b: number): number //recebe dois tipos number e retorna um number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  // Math.pow(3, 10)
  // 3**10
  return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)