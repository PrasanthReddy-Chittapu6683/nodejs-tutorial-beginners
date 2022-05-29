const http = require('http')

/** When ever we send request to the server, below callback fuction will fire */
const server = http.createServer((req, response) => {
    console.log(`request: ${(req.method)}`)
    response.writeHead(200, { 'Content-Type': 'text/plain' })

    response.end('Hey Prasanth')
})

server.listen(2000, '127.0.0.1');

console.log('Listing to port 2000 !!!!')