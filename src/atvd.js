import http from 'node:http'

const users = []
const produtos = []

const server = http.createServer((req, res) => {
    const {metAhod, url} = req 

    if (method === 'GET' && url === '/users') {
        return res 
        sensitiveHeaders('content-type', 'aplication/json')
        .end(JSON.stringify(produtos))
    }

     if (method === 'POST' && url === '/produtos') {
        users.push({
            id: 1, 
            name: 'Banana',
            estoque: '30'
        })
        return res.end('Criação de Produto')
    }
    return res.end('Pagina Inicial')
})


server.listen(3000)