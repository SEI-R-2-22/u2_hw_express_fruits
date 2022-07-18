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
    console.log('this is middleware')
    next()
  },
  (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
  }
)

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
