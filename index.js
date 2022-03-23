const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/greet/:name', (req, res) => {

    res.send(`Why hello there, ${req.params.name} !`)
})

app.get('/five', (req, res) => {
    let arr = [1, 2, 3, 4, 5]
    res.json(arr)
})


app.get('/evens/:n', (req, res) => {
    const n = parseInt(req.params.n)
    let array = []
    if (n >= 2) {
        for (let i = 2; i <= n; i += 2) {
            array.push(i)

        }
        res.send(array)
    }
})

app.get('/nameLength/:name', (req, res) => {
    let nameL = req.params.name;

    res.json(nameL.length)

})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {

    let fruitName = req.params.name.toLowerCase()
    const finds = fruits.find(fruit => fruitName === fruit.name.toLowerCase())
    res.send(finds)
})



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))