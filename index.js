const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const app = express()
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
  const nums = [1, 2, 3, 4, 5]
  res.send(nums)
})

app.get('/evens/:n', (req, res) => {
  let even = req.params.n
  let evenArray = []
  for (let i = 2; i <= even; i = i + 2) {
    evenArray.push(i)
  }
  res.send(evenArray)
})

app.get('/namelength/:name', (req, res) => {
  let name = req.params.name
  let nameLength = name.length
  res.send(`${nameLength}`)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  let fruitName = req.params.name
  fruits.map((fruit) => {
    if (fruit.name == fruitName) {
      res.send(fruit)
    }
  })
})
