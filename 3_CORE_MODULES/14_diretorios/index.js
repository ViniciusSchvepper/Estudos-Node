const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {
    console.log('Não')
    fs.mkdirSync('minhapasta')
} else {
    console.log('Existe')
}