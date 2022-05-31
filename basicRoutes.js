
const fs = require('fs')
const http = require('http')

/** When ever we send request to the server, below callback fuction will fire */
const server = http.createServer((req, response) => {
    console.log(`request: ${(req.url)}`)
    if (req.url === '/home' || req.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '//index.html').pipe(response)
    } else if (req.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirnames + '//contact.html').pipe(response)
    } else if (req.url === '/api/prcv') {
        let list = [{ name: 'Prasanth', age: 30 }, { name: 'Reddy', age: 25 }]
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(list))
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '//404.html').pipe(response)

    }
})

server.listen(2005, '127.0.0.1');

console.log('Listing to port 2005 !!!!')