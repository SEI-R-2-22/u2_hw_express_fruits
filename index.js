const express = require('express')
const fruits = require('./fruits')
const PORT = 3000
const app = express()


app.listen(PORT, () => console.log(`Serving delicious fruits on port ${PORT} 🍒`))

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    res.send({msg: `1, 2, 3, 4, 5`})
})

app.get('/evens/:n', (req,res) => {
    let n = `${req.params.name}`
    if(n % 2 == 0) {
    res.send( console.log(n))}
})

app.get('/nameLength:name', (req, res) => {
    const str = `${req.params.name}`
    res.send(
        console.log(`${str.length}`)
    )
})

//fruits 
app.get('/fruits', (req,res) => {
    res.send({msg: `${req.params.fruit}`})
})

app.get('/fruits:name', (req, res) => {
    let oneFruit = `${req.query.name}`
    const fruit = fruits.find(element => element = oneFruit )
    res.send ((console.log(fruit)))
})
