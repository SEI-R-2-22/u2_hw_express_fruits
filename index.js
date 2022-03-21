const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3000


const app = express()

app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})

app.get('/ping', (req, res) => {res.json('pong')})

app.get('/greet/:name', (req, res) => {
    res.send({msg: `Why hello there, ${req.params}`})
})

app.get('/evens/:n', (req, res) => {
    res.send([parseInt(2,4,6,8,10)])
})

app.get('/namelength/:name', (req, res) => {
    res.send({
        msg: `${req.params.name} has ${req.params.name.length} letters in their name`
    })
})

