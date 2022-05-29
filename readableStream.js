const http = require('http')
const fs = require('fs')


const myReadStream = fs.createReadStream(__dirname + '//files//ReadableStreamData.txt')

myReadStream.on('data', (chunks) => {
    console.log(`<<<<<<<<< new chunk received >>>>>>>>>> ${chunks}`)
})
