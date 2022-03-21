const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
  res.send([1, 2, 3, 4, 5])
})

app.get('/evens/:n', (req, res) => {
  const n = parseInt(req.params.n)
  const evens = []
  if (n >= 2) for (let i = 2; i <= n; i += 2) evens.push(i)
  res.send(evens)
})

app.get('/namelength/:name', (req, res) => {
  res.send(`${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
  const sortedFruits = fruits.sort((a, b) =>
    a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1
  )
  res.send(sortedFruits)
})

app.get('/fruits/:name', (req, res) => {
  const foundFruit = fruits.find((fruit) => fruit.name === req.params.name)
  res.send(foundFruit)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT})🍒`)
)
