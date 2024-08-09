const chalk = require('chalk')
const inquirer = require('inquirer')

function get_name_and_age(p1, p2) {
    if (!p1 || !p2) {
        throw new Error('Nome e idade são obrigatorios!')
    }
    if (!Number.isInteger(parseInt(p2))) {
        throw new Error('X não é inteiro!')
    }
    if (Number.isInteger(parseInt(p1))) {
        throw new Error('O nome precisa ser válido!')
    }
    return console.log(chalk.bgYellow.black(`Seu nome é ${p1} e você tem ${p2} anos!`))
}

inquirer.prompt([{
    name: 'p1',
    message: 'Qual seu nome? '
},
{
    name: 'p2',
    message: 'Qual sua idade?'
}
]).then((answers) => {
    get_name_and_age(answers.p1, answers.p2)
})