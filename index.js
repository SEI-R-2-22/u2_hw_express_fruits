const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001


const app = express()

//ROUTES
app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    res.json([1, 2, 3, 4, 5])
})

app.get('/evens/:n', (req, res) => {
    let evensArray = []
    let n = (req.params.n)
    for (let y = 2; y <= Number(n); y++) {
        if (y % 2 === 0) {
            evensArray.push(Number(y))
        }
    }
    res.send(evensArray)
})

app.get('/fruits/:name', (req, res) => {
    let fruitItem = (req.params.name)

    const newFruits = fruits.find(fruit => {
        if (fruit.name === fruitItem) {
            return fruit
        } else if (fruit.name.toLowerCase() === fruitItem) {
            return fruit
        }
    })
    res.send(newFruits)
})



app.get('/fruits-sort', (req, res) => {
    const fruitNames = fruits.map(fruitItem => {
        return Object.entries(fruitItem)
    })
    console.log(fruitNames)

    const sortFruits = fruitNames.sort()
    console.log(sortFruits)
    res.send(sortFruits)
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))