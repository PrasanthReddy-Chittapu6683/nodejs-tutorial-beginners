const fs = require('fs')

/** Synchronous Way */
let fileDetails = fs.readFileSync('files/readMe.txt', 'utf8')

console.log(`Reading File data >>>>> ${fileDetails}`)


fs.writeFileSync('files/writeMe.txt', fileDetails)

console.log(`Reading File data from WriteMe >>>>>${fs.readFileSync('files/writeMe.txt', 'utf8')}`)


/** Asynchronous  Way */

fs.readFile('files/asyncReadMe.txt', 'utf8', (error, data) => {
    if (data) {
        console.log(data)
        fs.writeFile('files/asyncWriteme.txt', data, () => {
            console.log('File Created sucessfully')
        })
    }
    if (error) {
        console.log(error)
    }
})
