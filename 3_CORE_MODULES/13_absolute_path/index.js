const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//formar path
const midFolder = 'relatorios'
const fileName = 'vinicius.txt'

const filePath = path.join('/', 'arquivos', midFolder, fileName)
console.log(filePath)