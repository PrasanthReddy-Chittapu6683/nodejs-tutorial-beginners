let events = require('events')

let myEventEmitter = new events.EventEmitter()

myEventEmitter.on('someEvent', (msg) => {
    console.log(msg)
})





module.exports = {
    myEventEmitter
}