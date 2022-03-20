"use strict";
// string
let nome = "Draco";
console.log(nome);
//nome = 28
// numbers
let idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = true;
//possuiHobbies = -1
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
/* minhaIdade = 'Idade é 27'
console.log(typeof minhaIdade) */
// array
let hobbies = ["Cozinhar", "Ler"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies[0]);
// tuplas
let endereco = ["Av Principal", 99, "Bloco A"];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 10] = "Laranja";
    Cor[Cor["Amarelo"] = 11] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Vermelho);
// Any
let vassoura = 'Nimbus 2000';
console.log(vassoura);
vassoura = { marca: 'Nimbus 2000', ano: 1991 };
console.log(vassoura);
