const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const name = args['nome']
const occupation = args['profissao']
console.log(name, occupation)