// string
let nome = "Draco"
console.log(nome)
//nome = 28

// numbers
let idade = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies = true
//possuiHobbies = -1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade :number
minhaIdade = 27
console.log(typeof minhaIdade)
/* minhaIdade = 'Idade é 27'
console.log(typeof minhaIdade) */

// array
let hobbies : any[] = ["Cozinhar", "Ler"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100, 200, 300]
//hobbies = 100

console.log(hobbies[0])

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

//Enums
enum Cor{
  Cinza, //0
  Verde = 100, //100
  Azul,   //101
  Laranja = 10,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Vermelho)

// Any
let vassoura: any = 'Nimbus 2000'
console.log(vassoura)
vassoura = {marca: 'Nimbus 2000', ano: 1991}
console.log(vassoura)
