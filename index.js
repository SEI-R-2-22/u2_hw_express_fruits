const express = require('express')

const fruitController = require('./controllers/FruitController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/someroute', (req, res) => {
  // do something here if necessary before the response
  console.log('You are in the /someroute route handler!')
  // send data back in response to the incoming request
  res.send({ message: 'This is someplace route' })
})

app.get('/fruits', fruitController.getFruits)
// app.get('/fruits/sort', fruitController.fruitSort)
app.get('/fruits/:name', fruitController.fruitName)

app.get('*', (req, res) => {
  res.send('404 Not Found')
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
