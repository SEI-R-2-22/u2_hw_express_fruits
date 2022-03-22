const express = require('express')
const fruits = require('./fruits')
const Greeting = require("./controllers/Greeting");
const PORT = process.env.PORT || 3001
const app = express()

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  let desiredFruit = req.params.name
  fruits.map((fruit) => {
    if (fruit.name.toLowerCase() === desiredFruit) {
      res.send(fruit)
    }
  })
})

//Bonus - Didn't get
app.get('/fruits/sort', (req, res) => {
  res.send(fruits)
})

app.get('/ping', (req,res) => {
  res.json('pong')
})

app.get('/greet/:name', Greeting.getName)
app.get('/five', Greeting.getFive)
app.get('/evens/:n', Greeting.getEvens)
app.get('/namelength/:name', Greeting.getNameLength)
// Final Line
app.listen(PORT, () => console.log(`Serving up delicious fruit on port ${PORT} 🍒`))