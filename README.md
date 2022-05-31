## What is Node jS? 

-   Its a platform which allows us to run JavaScript on a computer / server.
-   It is used to Read, delete and update files.
-   Easiy communicate with a database.

## Why to use Node.js
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


##  V8 engine
-   Computers do not unserstand JavaScript
-   A JavaScript engine takes JavaScript and converts it into somethig it does understand - machine Code


`JavaScipt` --> `C++` --> `Assembly Language` --> `Machine Code`

-   Node Js is written in C++
-   At the heart of NodeJS is the V8 engine
-   The V8 engine converts our JS into machine code

`JavaScript` ---> `C++` -- `NodeJS` -- `V8` ---> `Machine COde`


## The Global Object

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

## Function Expressions

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

## Modules and require()

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

## Module Patterns

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

## Node Event Emitter / Cusotme Modules(Emitter)

#### Method -1: 
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
#### Method -2: 

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


## Reading & Writing Files


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


## Creating & Removing Directories

```javascript
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


```


## Creating a Server


```javascript
    const http = require('http')

    /** When ever we send request to the server, below callback fuction will fire */
    const server = http.createServer((req, response) => {
        console.log(`request: ${(req.method)}`)
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Hey Prasanth')
    })
    /** Server is going to run in the URL 127.0.0.1 and port 2000 */
    server.listen(2000, '127.0.0.1');

    console.log('Listing to port 2000 !!!!')
```

## Streams and Buffers
### Buffer:
-   Temporary storage spot for a chunk of data that is being transferred from one place to another.
-   THe buffer is filled with data, then passed along.
-   Transfer small chunks of data at a time.


### Streams
-   Can create streams in Node.js to transfer data.
-   Increasee performance 
-   Writable streas - allow node js to send/write data to a stream
-   Readable streams - allow node js to read data from stream
-   Dupex - can read & write to a stream.
## Readable Streams
-   Readable streams - allow node js to read data from stream

```javascript
    const fs = require('fs')

    const myReadStream = fs.createReadStream(__dirname + '//files//ReadableStreamData.txt')

    myReadStream.on('data', (chunks) => {
        console.log(`<<<<<<<<< new chunk received >>>>>>>>>> ${chunks}`)
    })

```

## Writable Streams
-   Writable streas - allow node js to send/write data to a stream

```javascript
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

```
## Pipes


```javascript
    const fs = require('fs')
    const http = require('http')

    /** When ever we send request to the server, below callback fuction will fire */
    const server = http.createServer((req, response) => {
        console.log(`request: ${(req.method)}`)
        response.writeHead(200, { 'Content-Type': 'text/plain' })

        const myReadStream = fs.createReadStream(__dirname + '//files//ReadableStreamData.txt')
        const myWritableStream = fs.createWriteStream(__dirname + '//files//WritableStreamData.txt')

        /**Writing to text file */
        myReadStream.pipe(myWritableStream)

        /**Sending data to Browser client */
        myReadStream.pipe(response)

        // response.end('Hey Prasanth')
    })

    server.listen(2001, '127.0.0.1');

    console.log('Listing to port 2001 !!!!')
```
## Serving HTML Pages from Node to client browser

-   <b>NOTE:: response.writeHead(200, { 'Content-Type': `'text/html'` })</b>

```javascript
    const fs = require('fs')
    const http = require('http')

    /** When ever we send request to the server, below callback fuction will fire */
    const server = http.createServer((req, response) => {
        console.log(`request: ${(req.method)}`)
        response.writeHead(200, { 'Content-Type': 'text/html' })

        const myReadStream = fs.createReadStream(__dirname + '//index.html')


        /**Sending data to Browser client */
        myReadStream.pipe(response)

        // response.end('Hey Prasanth')
    })

    server.listen(2002, '127.0.0.1');

    console.log('Listing to port 2002 !!!!')

```

```html
    <!DOCTYPE html>
    <html>

    <head>
        <style>
            body {
                background-color: skyblue;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
                padding: 30px;
            }

            h1 {
                font-size: 48px;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-align: center;
            }

            p {
                font-size: 16px;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <h1>Welcoe to Node JS beginners tutorial</h1>
        <p>Hey I am Prasanth CV</p>
    </body>

    </html>
```

## Serving JSON Data
-   Send JSON data to client browser
-   `response.end` will accept only string / buffer data. So need to serialize the JSON object to string using `JSON.stringify`

```javascript
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
```

## Basic Routing

```javascript

    const fs = require('fs')
    const http = require('http')

    /** When ever we send request to the server, below callback fuction will fire */
    const server = http.createServer((req, response) => {
        console.log(`request: ${(req.url)}`)
        if (req.url === '/home' || req.url === '/') {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '//index.html').pipe(response)
        } else if (req.url === '/contact') {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirnames + '//contact.html').pipe(response)
        } else if (req.url === '/api/prcv') {
            let list = [{ name: 'Prasanth', age: 30 }, { name: 'Reddy', age: 25 }]
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(list))
        } else {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '//404.html').pipe(response)

        }
    })

    server.listen(2005, '127.0.0.1');
    console.log('Listing to port 2005 !!!!')

```

```html
    <!DOCTYPE html>
    <html>

    <head>
        <style>
            body {
                background-color: rgb(250, 162, 146);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: #fff;
                padding: 30px;
            }

            h1 {
                font-size: 48px;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-align: center;
            }

            p {
                font-size: 16px;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <h1>404, oops!</h1>
        <p>Something went wrong!
            <a href="/home">Go Home</a>
        </p>
    </body>

    </html>

```


## Express
-   Easy & Flexible routing system.
-   Integrates with many templating engines.
-   Contains a middleware framework.
-   Its just a moudle written in Javascript which we can use in application.

#### HTP Methods / Verbs
-   GET
-   POST
-   DELETE
-   PUT

#### Responding to Requests
-   GET : `app.get('route', fn)`
-   POST : `app.post('route', fn)`
-   DELETE : `app.delete('route', fn)`


```javascript
    const express = require('express')
    const app = express()

    app.get('/', (req, res) => {
        res.send('Hey This is  <b> Home page </b> from Express GET request')
    })

    // Express by default identifies & take care of Headers
    app.get('/contact', (req, res) => {
        res.send('Hey This is <b> Contact page </b> from Express GET request')
    })


    app.listen(3000)
```

##  Express Route Params
```javascript
const express = require('express')
const app = express()


app.get('/profile/:id', (req, res) => {
    res.send(`Hey This is  <b> having Profile ID ${req.params.id} </b> from Express GET request`)
})

app.listen(3000)
```

## Template Engines in Express

-   Install new package `npm install ejs -save`
-   `app.set('view engine', 'ejs')`
-   Create a folder `views` & create a file `newFile.ejs`

```javascript
const express = require('express')
const app = express();

app.set('view engine', 'ejs')


/** Using query params */
app.get('/profile/:id', (req, res) => {
    res.send(`Hey This is  <b> having Profile ID ${req.params.id} </b> from Express GET request`)
})

/** Sending static HTML pages to client browser. */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '//index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '//contact.html')
})

/** Sending dynamic HTML pages to client browser. */
app.get('/newFile/:id', (req, res) => {
    let data = {
        age: 34,
        job: 'UI Developer',
        hobbie:['eating','reading','working']
    }
    res.render('newFile', {
        person: req.params.id, data: data
    })
})



app.listen(3000)

```

-   `views/newFile.ejs`
```html
<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            background-color: skyblue;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
            padding: 30px;
        }

        h1 {
            font-size: 48px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
        }

        p {
            font-size: 16px;
            text-align: center;
        }
    </style>
</head>

<body>
    <h1>Welcoe to Profile of <u><i>
                <%=person %>
            </i></u>
    </h1>
    <p>Age : <strong>
            <%=data.age %>
        </strong></p>
    <p>Job : <strong>
            <%=data.job %>
        </strong></p>
    <h2>Hobbies</h2>
    <ul>
        <% data.hobbies.forEach (function(item){ %>
            <li>
                <%= item %>
            </li>

            <% }) %>
    </ul>
</body>

</html>

```

## Partial Templates

```javascript
const express = require('express')
const app = express();

app.set('view engine', 'ejs')


/** Using query params */
app.get('/profile/:id', (req, res) => {
    res.send(`Hey This is  <b> having Profile ID ${req.params.id} </b> from Express GET request`)
})

/** Sending static HTML pages to client browser. */
app.get('/', (req, res) => {
    res.render('index')// Rendering the HTML from views/index.ejs file
})

app.get('/contact', (req, res) => {
    res.render('contact') // Rendering the HTML from views/contact.ejs file
})

/** Sending dynamic HTML pages to client browser. */
app.get('/newFile/:id', (req, res) => {
    let data = {
        age: 34,
        job: 'UI Developer',
        hobbies: ['eating', 'reading', 'working']
    }
    res.render('newFile', {
        person: req.params.id, data: data
    })
})



app.listen(3000)
```
-   Folder: `partials/nav.ejs`
```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```
-   Folder: `partials/contact.ejs`
-   Syntax to add Partial view template `<%- include ('partials/nav.ejs') -%>`
```html
<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            background-color: skyblue;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #fff;
            padding: 30px;
        }

        h1 {
            font-size: 48px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
        }

        p {
            font-size: 16px;
            text-align: center;
        }
    </style>
</head>

<body>
    <%- include ('partials/nav.ejs') -%>
        <h1>Hey I am Prasanth CV</h1>
        <p>Follow me at my <a href="https://github.com/PrasanthReddy-Chittapu6683" target="_blank">GitHub </a></p>
</body>

</html>
```

##  Middleware & Static Files


```javascript
const express = require('express')
const app = express();

app.set('view engine', 'ejs')

/** Redering static styles file using express Middleware*/
app.use('/assets', express.static('assets'))
```

-   Create folder `assets/style.css`. Move the styles from `index.ejs` & `contact.ejs` files
```html
 body {
     background-color: skyblue;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     color: #fff;
     padding: 30px;
 }

 h1 {
     font-size: 48px;
     text-transform: uppercase;
     letter-spacing: 2px;
     text-align: center;
 }

 p {
     font-size: 16px;
     text-align: center;
 }

```

-   index.ejs
```html
<head>
    <link href="/assets/styles.css" rel="stylesheet" type="text/css" />
</head>
```

## Query Strings

```javascript

app.get('/contact', (req, res) => {
    res.render('contact', { qs: req.query }) // Rendering the HTML from views/contact.ejs file
})

```

```html
<!DOCTYPE html>
<html>

<head>
    <link href="/assets/styles.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <%- include ('partials/nav.ejs') -%>
        <h1>Hey I am Prasanth CV</h1>
        <p>Follow me at my <a href="https://github.com/PrasanthReddy-Chittapu6683" target="_blank">GitHub </a></p>
        <p>
            Query Param: <%= qs.dept %>
        </p>
        <form id="contact-form">
            <label for="who">WHo do you want to contact</label>
            <input type="text" name="'who" value="<%= qs.person %>" <label for="department">Which department</label>
            <input type="text" name="department" value="<%= qs.dept %>" <label for="email">Your email</label>
            <input type="text" name="email">
            <input type="submit" value="submit">

        </form>
</body>

</html>
```

##  Handling POST Requests