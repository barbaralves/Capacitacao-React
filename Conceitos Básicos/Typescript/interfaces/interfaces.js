"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Hermione';
}
const pessoa = {
    nome: 'Draco',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas', idade: 27, altura: true })
pessoa.saudar('Malfoy');
// Usando Classes..
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimoContato = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Tom';
saudarComOla(meuCliente);
meuCliente.saudar('Riddle');
console.log(meuCliente.ultimoContato);
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3**10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);
