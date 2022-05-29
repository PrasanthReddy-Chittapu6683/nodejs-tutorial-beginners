
let counter = function (arr) {
    return `There are ${arr?.length} elements in this array`
}

let adder = function (a, b) {
    return `Sum of the 2 numbers is ${a + b}`
}

let pi = 3.142

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;