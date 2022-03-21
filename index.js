const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})
app.get('/greet/:name', (req, res) => {
  res.json(`Why. hello there, ${req.params.name}`)
})
app.get('/five', (req, res) => {
  const arr = [1, 2, 3, 4, 5]
  res.json(arr)
})
app.get('/evens/:n', (req, res) => {
  const num = req.params.n
  let arr = []
  for (let i = 0; i < parseInt(num); i++) {
    arr.push(i)
  }
  res.json(arr)
})
app.get('/namelength/:name', (req, res) => {
  let nameLength = req.params.name
  res.json(nameLength.length)
})
app.get('/fruits', (req, res) => {
  res.json(fruits)
})
app.get('/fruits/:name', (req, res) => {
  let fruitName = req.params.name.toLowerCase()

  let fruitFinder = fruits.find((fruit) => {
    return fruit.name.toLowerCase() === fruitName
  })
  res.json(fruitFinder)
})
app.get('/fruits/sort', (req, res) => {
  let sorted = fruits.sort()

  res.send(sorted)
})
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT}`)
)
