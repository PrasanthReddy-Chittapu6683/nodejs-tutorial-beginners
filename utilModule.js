const myUtils = require('util')
let events = require('events')

const Person = function (name) {
    this.name = name
}

myUtils.inherits(Person, events.EventEmitter)

const james = new Person('James')
const mary = new Person('Mary')
const jason = new Person('Jason')

const people = [james, mary, jason]

people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(`${person.name} said : ${msg}`)
    })
})

james.emit('speak', 'hey How are you')
mary.emit('speak', 'Am doing good')