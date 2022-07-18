const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const app = express()

//Routes
app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get(
  '/greet/:name',
  (request, response, next) => {
    next()
  },
  (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
  }
)
app.get(
  '/five',
  (request, response, next) => {
    next()
  },
  (req, res) => {
    let five = [1, 2, 3, 4, 5]
    res.send(five)
  }
)

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
