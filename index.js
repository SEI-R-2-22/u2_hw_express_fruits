const express = require('express')
const { all } = require('express/lib/application')
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
  let arr = [1, 2, 3, 4, 5]
  res.send(arr)
})

app.get('/evens/:n', (req, res) => {
  let numbers = []
  for (let i = 2; i <= `${req.params.n}`; i++) {
    numbers.push(i)
  }
  let evens = numbers.filter((number) => parseInt(number) % 2 == 0)
  res.send(evens)
})

app.get('/namelength/:name', (req, res) => {
  res.send(`${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  let search = fruits.find(
    (fruit) => fruit.name.toLowerCase() === req.params.name.toLowerCase()
  )
  res.send(search.name)
})

// listen PORT
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
