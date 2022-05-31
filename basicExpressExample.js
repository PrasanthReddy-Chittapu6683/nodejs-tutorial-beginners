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