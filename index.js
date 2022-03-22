const express = require('express')
const fruits = require('./fruits')
// const fruitController = require('./controllers/FruitController')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.json({ message: `Why hello there, ${req.params.name}` })
})

app.get('/five', (req, res) => {
  let array = [1, 2, 3, 4, 5]
  res.json({ array })
})

app.get('/evens/:n', (req, res) => {
  let array = []
  for (let i = 2; i <= req.params.n; i++) {
    if ([i] % 2 === 0) {
      array.push(i)
    }
  }
  res.json(array)
})

app.get('/namelength/:name', (req, res) => {
  res.json(`${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
  res.json(fruits)
})

app.get('/fruits/:name', (req, res) => {
  let banana = fruits.find(
    (i) => i.name.toLowerCase() === req.params.name.toLowerCase()
  )
  res.json(banana)
})

// app.get('/fruits', fruitController.fruitArray)
// app.get('/fruits/:name', fruitController.fruitArrayNames)

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
