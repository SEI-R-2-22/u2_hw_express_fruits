const express = require('express');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    let nums = [1, 2, 3, 4, 5];
    res.send(`${nums}`)
})

app.get('/evens/:n', (req, res) => {
    let evensArray = [];
    let evens = parseInt(req.params.n)
    for(let i = 2; i <= evens; i+=2) {
        evensArray.push(i)
    }
    res.send(`${evensArray}`)
})

app.get('/namelength/:name', (req, res) => {
    res.send(`${req.params.name.length}`)
})

app.get('/fruits/:name', (req, res) => {
    let parameter = req.params.name;
    const findFruit = (fruit) => {return fruit.name.toLowerCase()===parameter}
    res.send(`${Object.values(fruits.find(findFruit))}`)
})


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))