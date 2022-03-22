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

    let array = []
    let n = parseInt(req.params.n)
    if (n >=2) {
        for (let i=2; i<=n; i++) {
            if (i%2 === 0) {
                array.push(i)
            }
        }
    }
    res.send(array)
})

//LENGTH OF NAME
app.get('/namelength/:name', (req, res) => {
    res.send(`${req.params.name.length}`)
})

//FRUITS 
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

//FRUIT NAMES
app.get('/fruits/:name', (req, res) => {
    findFruit = fruits.find((fruit) => (
        fruit.name.toLowerCase() === req.params.name.toLowerCase()
    ))
    res.send(findFruit)
    // console.log(`${req.params.name}`)
})







app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))