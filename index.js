const express = require('express');
const { get } = require('express/lib/response');
const fruits = require('./fruits');
const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port: ${PORT}`)
})

app.get('/ping', (req, res) => {
    res.json('pong');
})
app.get('/greet/:name', (req, res) => {
    res.send(`Hello there, ${req.query.name}`)
})
app.get('/five', (req, res) => {
    res.send([1,2,3,4,5])
})
app.get('/evens/:n', (req, res) => {
    res.send([2,4,6,8,10])
})
app.get('/namelength/:name', (req, res) => {
    res.send(`The length of the name is: ${(req.params.name).length}`)
})
app.get('/fruits', (req, res) => {
    res.send([fruits])
})
app.get('/fruits/:name', (req, res) => {
    const fruitName = fruits.map(fruitName)
    if (fruitName == fruits.name);
        res.send(`We found: ${req.query.name}`)

  })