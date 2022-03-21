const express = require('express')
const req = require('express/lib/request')
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
  let fiveArray = [1, 2, 3, 4, 5]
  res.send(fiveArray)
})

app.get('/evens/:n', (req, res) => {
  let number = req.params.n
  console.log(number)
  let numberArray = []
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      numberArray.push(i)
    }
  }
  res.send(numberArray)
})

app.get('/namelength/:name', (req, res) => {
  res.send(`${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

//I learned this from the .sort() page on MDN.
app.get('/fruits/sort', (req, res) => {
  let sortedFruit = fruits.sort(function (a, b) {
    const fruitA = a.name.toLowerCase()
    const fruitB = b.name.toLowerCase()
    if (fruitA < fruitB) {
      return -1
    }
    if (fruitA > fruitB) {
      return 1
    }
  })
  res.send(sortedFruit)
})

app.get('/fruits/:name', (req, res) => {
  const findFruit = fruits.find((fruit) => {
    return fruit.name.toLowerCase() === req.params.name.toLowerCase()
  })

  res.send(findFruit)
})

app.get('*', (req, res) => {
  res.send('404 Not Found')
})
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT}`)
)
