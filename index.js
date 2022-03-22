const express = require('express')

const fruitController = require('./controllers/FruitController.js')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', fruitController.greet)

app.get('/five', fruitController.five)

app.get('/evens/:n', fruitController.evens)

app.get('/namelength/:name', fruitController.nameLength)

app.get('/fruits', fruitController.getFruits)

app.get('/fruits/sort', fruitController.sortFruits)

app.get('/fruits/:name', fruitController.fruitName)

app.get('*', fruitController.catchAll)

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
