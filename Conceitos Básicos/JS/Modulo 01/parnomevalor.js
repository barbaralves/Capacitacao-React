// par nome/valor

const saudacao = 'Ola' // contexto lexico 1 - onde foi definido

function exec() {
    const saudacao = 'Fala' //contexto lexico 2
    return saudacao
}


// objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'Av. Vicente Simoes',
        numero: 575
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)