for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ', i)

for (let j = 0; j < 10; j++){
    console.log(j)
}
//console.log('j = ', j)

console.log('Funcs var')
const funcs = []

for (var w = 0; w < 10; w++){
    funcs.push(function(){
        console.log(w)
    })
}
funcs[2]()
funcs[8]()

console.log('Funcs let')
const funcs2 = []

for (let r = 0; r < 10; r++){
    funcs2.push(function(){
        console.log(r)
    })
}
funcs2[2]()
funcs2[8]()