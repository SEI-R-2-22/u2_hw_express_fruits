const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    numArray = [1, 2, 3, 4, 5]
    res.send(numArray)
})

app.get('/evens/:n', (req, res) => {
    let evens = []
    for (let i = 2; i <= req.params.n; i++) {
        if([i] % 2 === 0){
            evens.push(i)
        }}
        res.send(evens)

})

app.get('/namelength/:name', (req, res) => {
    res.send(`Your name is ${req.params.name.length} letters long`)
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    theFruit = fruits.find((i) => i.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(theFruit) 
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
