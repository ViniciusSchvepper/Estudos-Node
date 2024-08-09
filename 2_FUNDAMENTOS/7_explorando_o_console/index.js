const x = 10
const y = "Vinicius"
const z = ['a', 'b']

console.log(x, y, z)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//Outra forma de interpolação
console.log('Seu nome é %s, e esta aprendendo Node!', y)

setTimeout(() => {
    console.clear()
}, 1000)