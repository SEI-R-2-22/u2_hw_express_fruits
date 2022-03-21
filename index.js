const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/someroute', (req, res) => {
  res.send(responseData)
})

app.get('/greet/:name', (req, res) => {
  res.send({
    msg: `Why hello there, ${req.params.name}`
  })
})

app.get('/five', (req, res) => {
  let num = [1, 2, 3, 4, 5]
  res.send({
    return: `${num}`
  })
})

app.get('/evens/:n', (req, res) => {
  const arr = []
  let i = 2
  while (i <= parseInt(req.params.n)) {
    arr.push(i)
    i += 2
  }
  res.send(arr)
})

app.get('/namelength/:name', (req, res) => {
  res.send(`${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
  let newArr = fruits.map(function (fruits) {
    return fruits.name
  })
  res.send(`${newArr}`)
})

app.get('/fruits/:name', (req, res) => {
  let newArr = fruits.map(function (fruits) {
    return fruits.name
  })
  const matches = newArr.filter((e) => e.includes(req.params.name))
  res.send(matches)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
