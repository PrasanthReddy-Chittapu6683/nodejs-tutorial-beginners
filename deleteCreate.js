const fs = require('fs')


/** Delete files */
fs.unlink('files/Dummy.txt', () => {
    console.log('Dummy.txt file Deleted succesfully')
})

/** Delete sub files & Folder */

fs.unlink('./stuff/writeMe.txt', () => {
    fs.rmdirSync('stuff')
})

/** Create Folder */

/** Sync */
// fs.mkdirSync('stuff')

/** Async */
fs.mkdir('stuff', () => {
    console.log('stuff file Created succesfully')
})


/**  Delete Folder */

/** Sync */
// fs.rmdirSync('stuff')

/** Async */
fs.rmdir('stuff', () => {
    console.log('stuff file Deleted succesfully')
})
