const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', (req, res) =>{
    res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) =>{
    let fiveArr = [1, 2, 3, 4, 5];
    res.send(fiveArr);
})

app.get('/evens/:n', (req, res) =>{
    let evens = []
    const n = parseInt(req.params.n)
    if (n>2) {
        for (i=2; i<=n; i+=2){
            evens.push(i)
        }
    }
    res.send(evens)
})

app.get('/namelength/:name', (req, res) =>{
    let name = (`${req.params.name.length}`)
    console.log(name)
    res.send(name)
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) =>{
    let findFruit = fruits.find((fruit) => fruit.name === req.params.name)
    res.send(findFruit)
})

app.get('/fruits/sort', (req, res) => {
    const sortedFruits = fruits.sort((a, b) =>
      a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1
    )
    res.send(sortedFruits)
  })

app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})