
const fs = require('fs')
const http = require('http')

/** When ever we send request to the server, below callback fuction will fire */
const server = http.createServer((req, response) => {
    console.log(`request: ${(req.method)}`)
    response.writeHead(200, { 'Content-Type': 'text/plain' })

    const myReadStream = fs.createReadStream(__dirname + '//files//ReadableStreamData.txt')
    const myWritableStream = fs.createWriteStream(__dirname + '//files//WritableStreamData.txt')

    /**Writing to text file */
    myReadStream.pipe(myWritableStream)

    /**Sending data to Browser client */
    myReadStream.pipe(response)

    // response.end('Hey Prasanth')
})

server.listen(2001, '127.0.0.1');

console.log('Listing to port 2001 !!!!')