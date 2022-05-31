
const http = require('http')

/** When ever we send request to the server, below callback fuction will fire */
const server = http.createServer((req, response) => {
    console.log(`request: ${(req.method)}`)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    var myObj = {
        name: 'Prasath',
        job: 'Absolute Coders',
    }
    // response.end will accept only string / buffer data. So need to serialize the JSON object to string using JSON.stringify
    response.end(JSON.stringify(myObj))

})

server.listen(2004, '127.0.0.1');

console.log('Listing to port 2004 !!!!')