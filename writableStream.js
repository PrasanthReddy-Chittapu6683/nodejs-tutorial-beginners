
const fs = require('fs')

const myReadStream = fs.createReadStream(__dirname + '//files//ReadableStreamData.txt')
const myWritableStream = fs.createWriteStream(__dirname + '//files//WritableStreamData.txt')

let count = 0
myReadStream.on('data', (chunks) => {
    console.log(`<<<<<<<<< new chunk received & Writing >>>>>>>>>> ${chunks}`)
    count++;
    myWritableStream.write(chunks, (error) => {
        console.log('Write completed > ' + count)
    })
})
