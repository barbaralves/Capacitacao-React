// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = { nome: 'Joana' }
pessoa.end = 'Rua ABC'

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)

pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)