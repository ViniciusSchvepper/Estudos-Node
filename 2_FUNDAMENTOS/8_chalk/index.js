const chalk = require('chalk')

function gradeFeedback(nota) {
    if (nota >= 7) {
        console.log(chalk.green("Aprovado!"))
        return
    }
    return console.log(chalk.red("Reprovado"))
}

gradeFeedback(8)