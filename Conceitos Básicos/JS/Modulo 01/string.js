const escola = "Coder"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))
console.log(escola.charCodeAt(5))

console.log(escola.indexOf('e'))
console.log(escola.indexOf('de'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('30' + 2)
console.log(escola.replace('e', '3'))
console.log(escola.replace(/\w/g, '3'))

console.log('Ana, Maria, Pedro'.split(', '))
console.log('Ana,Maria,Pedro'.split(/,/))
console.log('Ana, Maria, Pedro'.split(/./))