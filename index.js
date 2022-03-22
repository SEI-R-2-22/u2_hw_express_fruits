const express = require('express');
const res = require('express/lib/response');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/someroute', (req, res) => {
    res.send('to somewhere')
})

app.get(`/greet/:name`, (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

let arrayNum = [1, 2, 3, 4, 5]
app.get(`/five`, (req, res) => {
    res.send(arrayNum)
})

app.get(`/evens/:num`, (req, res) => {
    const parsed = parseInt(req.params.num)
    let arrayEvens = []
    if (parsed % 2 === 0) {
        for (let n = 0; n <= parsed; n += 2) {
            arrayEvens.push(n)
        }
    }
    res.send(arrayEvens)
})

app.get(`/fruits`, (req, res) => {
    const fruit = fruits.filter(({ name }) => name)
    res.send(fruit)
})

app.get(`/fruits/:name`, (req, res) => {
    let fruitName = req.params.name.toLowerCase()
    const found = fruits.find(fruit => fruitName === fruit.name.toLowerCase())
    res.send(found)
})

app.post('/fruits/sort', (req, res) => {
    console.log()
    fruits.sort((a, b) => a.name.localeCompare(b.name))
    res.send(fruits)
})




app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('*', (req, res) => {
    res.send('404 Not Found')
})