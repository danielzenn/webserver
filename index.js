const net = require('net')

const server = net.createServer((socket) => {
    console.log('Alguien se conectó')

    socket.on('data', (data) => {
        console.log('Datos recibidos:', data.toString())

        console.log('RAW REQUEST:\n' + data.toString())

        socket.write('HTTP/1.1 200 OK\r\n' +
                    'Content-Type: text/plain\r\n' +
                    'Content-Length: 13\r\n' +
                    '\r\n' +
                    'Hello, World!')
    })

    socket.on('close', () => {
        console.log('Cliente desconectado')
    })

    socket.on('error', (error) => {
        console.error('Error en socket: ', error.message)
    })
})

server.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000')
})