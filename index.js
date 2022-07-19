const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const app = express()

//Routes
app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}!`)
})
app.get('/five', (req, res) => {
  let five = [1, 2, 3, 4, 5]
  res.send(five)
})
app.get('/evens/:n', (req, res) => {
  let evenArr = []
  for (let i = 2; i <= parseInt(req.params.n); i += 2) evenArr.push(i)
  console.log(evenArr)
  res.send(evenArr)
})

app.get('/namelength/:name', (req, res) => {
  let nameLength = req.params.name
  res.send(`${nameLength.length}`)
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
  let fruitsName = fruits.find(
    ({ name }) => name.toLowerCase() === req.params.name.toLowerCase()
  )

  res.send(fruitsName)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
