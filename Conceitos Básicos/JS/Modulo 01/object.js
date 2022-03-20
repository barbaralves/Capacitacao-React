const prod1 = {}
prod1.nome = 'Celular Ultra Mega' //criado dinamicamente o atributo nome
prod1.preco = 4998.90
prod1['Desconto Disponivel'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj:{
            bkabla: 2
        }
    }
}

console.log(prod2)

//JSON

'{ "nome": "Camisa Polo", "preco": 79.90,}'