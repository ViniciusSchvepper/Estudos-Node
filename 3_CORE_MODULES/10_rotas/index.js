const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000
const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true) // Transforma a url em um objeto
    const filename = q.pathname.substring(1) // Pega o nome do arquivo html
    if (filename.includes('html')) {
        if (fs.existsSync(filename)) {
            fs.readFile(filename, function(err, data) {
                res.writeHead(200,{ 'Content-Type': 'text/html' }) // res.writeHead é uma resposta ao servidor, neste caso sucedida (200) e content-type indica o conteudo da resposta 
                res.write(data) //conteudo lido sendo enviado ao cliente
                return res.end()
            })
        } else {
            fs.readFile('404.html', function(err, data) {
                res.writeHead(404, { 'Content-Type': 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
    })

server.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})