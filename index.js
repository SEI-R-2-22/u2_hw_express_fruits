const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const fruitController = require('./controllers/FruitControllers')

const app = express()

app.get('/ping', fruitController.Pong)
app.get('/greet/:name', fruitController.Greet)
app.get('/five', fruitController.Five)
app.get('/evens/:n', fruitController.Evens)
app.get('/namelength/:name', fruitController.NameLength)
app.get('/fruits', fruitController.Fruits)
app.get('/fruits/sort', fruitController.FruitsSort)
app.get('/fruits/:name', fruitController.FruitsName)
app.get('*', fruitController.MuchPower)
// ---------
app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT}`)
)
