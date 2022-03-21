const express = require('express')
const fruits = require('./fruits')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (res, req) => {
  res.send({
    msg: `Why hello there, ${req.params.name}!`
  })
})

app.get('/five', (req, res) => {
  const array = [1, 2, 3, 4, 5]
  res.send(array)
})

app.get('/evens/:n', (req, res) => {
  const num = parseInt(req.params.n)
  const evens = []
  for (i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      evens.push(i)
    } else if (i === num) {
      evens.push(num)
    }
  }
  res.send(evens)
})

app.get('/namelength/:name', (req, res) => {
  const length = req.params.name.length
  console.log(length)
  res.json(length)
})

app.get('/fruits', (req, res) => {
  let fruitArr = fruits.map(function (fruits) {
    return fruits.name
  })
  res.send(`${fruitArr}`)
})

app.get('/fruits/:name', (req, res) => {
  let fruitArr = fruits.map(function (fruits) {
    return fruits.name.toLowerCase()
  })
  const fruitMatch = fruitArr.filter((e) => e.includes(req.params.name))
  res.send(fruitMatch)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
