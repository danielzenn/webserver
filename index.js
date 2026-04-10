const net = require('net')

const server = net.createServer((socket) => {
    console.log('Alguien se conectó')

    socket.on('data', (data) => {
        console.log('Datos recibidos:', data.toString())

        socket.write('Servidor recibió: ' + data.toString())
    })
})

server.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000')
})