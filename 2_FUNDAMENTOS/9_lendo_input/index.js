const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem favorita? ', (language) => {
    if (language == '') {
        console.log('Resposta inválida')
    } else {
        console.log('A minha linguagem favorita é %s', language)
    }
    readline.close()
})
