# What is Node jS?

-   Its a platform which allows us to run JavaScript on a computer / server.
-   It is used to Read, delete and update files.
-   Easiy communicate with a database.

# Why to use Node.js
-   It uses JavaScript
-   Very fast (runs on the V8 engine & uses non-blocking code)
-   Huge ecosystem of open source package (npm)
-   Great for real-time services (like chats, Socket communications etc..)


-   The inner workining of Node.js
    -   V8 engine
    -   Modules
    -   Event emitter
    -   The file system
-   Creating a web server
    -   Routing
    -   Express
    -   Templating


#  V8 engine
-   Computers do not unserstand JavaScript
-   A JavaScript engine takes JavaScript and converts it into somethig it does understand - machine Code


`JavaScipt` --> `C++` --> `Assembly Language` --> `Machine Code`

-   Node Js is written in C++
-   At the heart of NodeJS is the V8 engine
-   The V8 engine converts our JS into machine code

`JavaScript` ---> `C++` -- `NodeJS` -- `V8` ---> `Machine COde`


# The Global Object

These objects are available in all modules. The following variables may appear to be global but are not. They exist only in the scope of modules, see the module system documentation:

-   __dirname
-   __filename
-   exports
-   module
-   require()

The objects listed here are specific to Node.js. There are built-in objects that are part of the JavaScript language itself, which are also globally accessible.

```javascript
    // setTimeout
    setTimeout(() => {
        console.log('1 sec passed')
    }, 1000);

    // setInterval
    let timer = 0
    let timerFunc = setInterval(() => {
        timer += 2
        console.log(`${timer} seconds have passsed`)
        if (timer > 8) {
            clearInterval(timerFunc)
            console.log(`${timer} timer exits`)
        }
    }, 2000);

    //  __dirname
    console.log(__dirname) // OUTPUT: D:\MyGitHub\nodejs-tutorial-beginners

    //  __filename
    console.log(__filename) // OUTPUT: D:\MyGitHub\nodejs-tutorial-beginners\app.js
```

# Function Expressions

```javascript
    function callFuction(fun) {
        console.log(`Calling 'callFuction'`)
        fun()
    }

    let sayHello = function () {
        console.log(`Saying 'Hello'`)
    }

    callFuction(sayHello)
```

# Modules and require()

-   count.js

```javascript
    let counter = function (arr) {
        return `There are ${arr?.length} elements in this array`
    }
    module.exports = counter;
```

-   app.js
```javascript
    const counterModule = require('./count')

    console.log(counterModule([1, 2, 3, 4, 5, 6]))
```

# Module Patterns

-   Export multiple function & variables

-   Method-1
    -   stuff.js
    ```javascript
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
    ```
    -   app.js
    ```javascript
    const commonStuff = require('./stuff')

    console.log(commonStuff.counter([1, 2, 3, 4, 5, 6]))
    console.log(commonStuff.pi)
    console.log(commonStuff.adder(commonStuff.pi, 34))

    // OUTPUT::
    // There are 6 elements in this array
    // Sum of the 2 numbers is 37.142
    // 3.142
    ```
-   Method-2
    -   stuff.js
     ```javascript
       module.export.counter = function (arr) {
            return `There are ${arr?.length} elements in this array`
        }

        module.export.adder = function (a, b) {
            return `Sum of the 2 numbers is ${a + b}`
        }

        module.export.pi = 3.142
    ```

-   Method-3
    -   stuff.js
     ```javascript
        let counter = function (arr) {
            return `There are ${arr?.length} elements in this array`
        }

        let adder = function (a, b) {
            return `Sum of the 2 numbers is ${a + b}`
        }

        let pi = 3.142
        module.export = {
            counter: counter,
            adder: adder,
            pi: pi
        }
    ```

# Node Event Emitter / Cusotme Modules(Emitter)

### Method -1: 
-   custommodule.js
```javascript
    let events = require('events')

    let myEventEmitter = new events.EventEmitter()

    myEventEmitter.on('someEvent', (msg) => {
        console.log(msg)
    })

    module.exports = {
        myEventEmitter
    }
```


-   app.js
```javascript
    const customModule = require('./custommodule')
    customModule.myEventEmitter.emit('someEvent', 'Hey am emitting the event !!!')
```
### Method -2: 

```javascript
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
```


# Reading & Writing Files


```javascript
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

```


# Creating & Removing Directories
