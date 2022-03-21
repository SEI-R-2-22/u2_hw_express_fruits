const express = require('express')
const fruits = require('./fruits')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.json(`Why hello there, ${req.params.name}!`)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
