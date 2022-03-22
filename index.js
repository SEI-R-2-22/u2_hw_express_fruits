const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fruits = require('./fruits');

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/greet/:name', (req, res) =>{
    res.send(`Why hello there, ${req.params.name}`)
})

const nums = [1, 2, 3, 4, 5]
app.get('/five', (req, res) => {
    res.send(nums)
})

app.get('/evens/:n', (req, res) => {
    let evens = []
    for (let i = 3; i <= req.params.n; i++) {
            if (i %2 === 0) {
                evens.push(i)
            }
        }
        res.send({evens})
    })

app.get('/namelength/:name', (req, res) => {
    res.send(`The length is ${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    findFruit = fruits.find((x) => x.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(findFruit)
  })