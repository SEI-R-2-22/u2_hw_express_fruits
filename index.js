const express = require('express')
const fruits = require('./fruits')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
  res.send([1, 2, 3, 4, 5])
})

const getEvens = (n) => {
  result = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(i)
    }
  }
  return result
}

app.get('/evens/:n', (req, res) => {
  res.send(getEvens(parseInt(req.params.n)))
})

app.get('/namelength/:name', (req, res) => {
  res.send(req.params.name.length.toString())
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  let resultFruit = fruits.find((fruit) => {
    return fruit.name.toLowerCase() === req.params.name.toLowerCase()
  })
  res.send(resultFruit)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
