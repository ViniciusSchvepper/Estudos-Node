const http = require('http')


//definir o port, e dar uma resposta com res para o usuario
const port = 3000
const server = http.createServer((req, res) => {
    res.write('Oi HTTP')
    //finalizar a resposta
    res.end()
})

server.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})