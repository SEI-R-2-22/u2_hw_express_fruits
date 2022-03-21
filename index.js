const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.port || 3001
const app = express()


//PING PONG
app.get('/ping', (req, res) => {
    res.json('pong')
})

//GREETING
app.get('/greet/:name', (req, res) => {
    res.send({message: `Why hello there, ${req.params.name}!`})
})

//FIVE NUMBERS
app.get('/five', (req, res) => {
    let numbers = [1,2,3,4,5]
    res.send(`${numbers}`)
})

//EVEN NUMBERS!!!!!!!!
app.get('/evens/:n', (req, res) => {
    res.send(``)
})

//LENGTH OF NAME
app.get('/namelength/:name', (req, res) => {
    res.send('${req.params.name}.length')
})





app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))