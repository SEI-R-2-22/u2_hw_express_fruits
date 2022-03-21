const express = require('express')
const fruits = require('./fruits')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.json(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
  res.json([1, 2, 3, 4, 5])
})

app.get('/evens/:n', (req, res) => {
  let x = 2
  const arr = []
  while (x <= parseInt(req.params.n)) {
    arr.push(x)
    x += 2
  }
  res.json(arr)
})

app.get('/namelength/:name', (req, res) => {
  res.json(req.params.name.length)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
  fruits.sort(function (a, b) {
    let x = a.name.toLowerCase()
    let y = b.name.toLowerCase()
    if (x < y) {
      return -1
    }
    if (x > y) {
      return 1
    }
  })
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  const fruitName = req.params.name.toLowerCase()
  const fruitNames = fruits.filter((fruit) => {
    return fruit.name.toLowerCase() === fruitName
  })
  res.send(fruitNames)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT}`)
)
