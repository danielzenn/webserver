const net = require('net')

const server = net.createServer((socket) => {
    console.log('Alguien se conectó')

    socket.on('data', (data) => {
        console.log('Datos recibidos:', data.toString())

        console.log('RAW REQUEST:\n' + data.toString())

        const parsed = parse(data.toString())
        console.log(parsed)

        let x = 'Not found'
        let y = '200 OK'

        if (parsed.path == '/') {
            x = 'Hello, World!'
        } else if (parsed.path == '/about') {
            x = 'About page'
        } else {
            y = '404 Not Found'
        }

       socket.write('HTTP/1.1 ' + y + '\r\n' +
            'Content-Type: text/plain\r\n' +
            'Content-Length:' + x.length + '\r\n' +
            '\r\n' +
            x)
      
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

function parse(request) {
    const arr = request.split('\r\n')
    const a = arr[0]
    const b = a.split(' ')

    return {method: b[0], path: b[1]}
}