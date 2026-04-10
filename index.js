const net = require('net')

const server = net.createServer((socket) => {
    console.log('Alguien se conectó')
})

server.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000')
})