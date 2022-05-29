
const fs = require('fs')
const http = require('http')

/** When ever we send request to the server, below callback fuction will fire */
const server = http.createServer((req, response) => {
    console.log(`request: ${(req.method)}`)
    response.writeHead(200, { 'Content-Type': 'text/html' })

    const myReadStream = fs.createReadStream(__dirname + '//index.html')


    /**Sending data to Browser client */
    myReadStream.pipe(response)

    // response.end('Hey Prasanth')
})

server.listen(2002, '127.0.0.1');

console.log('Listing to port 2002 !!!!')