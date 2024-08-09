const fs = require('fs')

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Erro ao ler arquivo')
    }
    else {
        console.log(data)
    }
})