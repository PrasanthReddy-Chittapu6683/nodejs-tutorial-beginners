
/** Modules and require() */
const counterModule = require('./count')
const commonStuff = require('./stuff')
const customModule = require('./custommodule')

console.log(counterModule([1, 2, 3, 4, 5, 6]))

console.log(commonStuff.counter([1, 2, 3, 4, 5, 6]))
console.log(commonStuff.pi)
console.log(commonStuff.adder(commonStuff.pi, 34))

customModule.myEventEmitter.emit('someEvent', 'Hey am emitting the event !!!')

/** Global Objects */ 
// console.log('Hey Node JS')


// setTimeout(() => {
//     console.log('1 sec passed')
// }, 1000);


// let timer = 0
// let timerFunc = setInterval(() => {
//     timer += 2
//     console.log(`${timer} seconds have passsed`)
//     if (timer > 8) {
//         clearInterval(timerFunc)
//         console.log(`${timer} timer exits`)
//     }
// }, 2000);


// console.log(__dirname)
// console.log(__filename)


/** Function Expression */

// function callFuction(fun) {
//     console.log(`Calling 'callFuction'`)
//     fun()
// }

// let sayHello = function () {
//     console.log(`Saying 'Hello'`)
// }

// callFuction(sayHello)





