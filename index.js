const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const app = express()

//routes
app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
})

fiveArray = []
for (let i = 1; i <= 5; i++) {
  fiveArray.push(i)
}

app.get('/five', (req, res) => {
  res.send(fiveArray)
})

app.get('/evens/:n', (req, res) => {
  let newArray = []
  let num = req.params.n

  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      newArray.push(i)
      i += 1
    }
  }
  res.send(newArray)
})

app.get('/namelength/:name', (req, res) => {
  let myName = req.params.name
  let num = myName.length
  res.send(`The length of your name is: ${num}`)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  fruits.forEach((fruit) => (fruit.name = fruit.name.toLowerCase()))
  // console.log(req.params.name.toLowerCase)
  const yourFruitObj = fruits.find((fruit) => fruit.name === req.params.name)
  res.send(yourFruitObj)
})

//404
app.get('*', (req, res) => {
  res.send('404 Not Found')
})

//listener at the bottom of the file

app.listen(PORT, () =>
  console.log('Serving up delcisious fruits on port ${PORT} 🍒')
)
