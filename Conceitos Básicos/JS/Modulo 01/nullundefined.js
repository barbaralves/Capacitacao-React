let valor // não incializada
console.log(valor)

valor = null // não aponta para nenhum local de memoria e nem é um tipo primitivo, ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.20
console.log(produto)

produto.preco = undefined // evitar atribuit undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)