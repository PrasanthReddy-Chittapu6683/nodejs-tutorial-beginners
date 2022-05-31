const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const urlEcodingParser = bodyParser.urlencoded({ extended: true })
app.set('view engine', 'ejs')

/** Redering static styles file using express Middleware*/
app.use('/assets', express.static('assets'))

/** Using query params */
app.get('/profile/:id', (req, res) => {
    res.send(`Hey This is  <b> having Profile ID ${req.params.id} </b> from Express GET request`)
})

/** Sending static HTML pages to client browser. */
app.get('/', (req, res) => {
    res.render('index')// Rendering the HTML from views/index.ejs file
})

app.get('/contact', (req, res) => {
    res.render('contact', { qs: req.query }) // Rendering the HTML from views/contact.ejs file
})


app.post('/contact', urlEcodingParser, (req, res) => {
    console.log(req.body)
    res.render('contact-success', { data: req.body }) // Rendering the HTML from views/contact.ejs file
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