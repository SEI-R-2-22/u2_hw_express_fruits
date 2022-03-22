const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const fruits = require('./fruits')
const { request } = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  console.log('working')
})

app.get('/ping', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
  const five = [1, 2, 3, 4, 5]
  res.send(five)
})

app.get('/even/:n', (req, res) => {
  const even = []
  const n = parseInt(req.params.n)
  let index = 0
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      even[index] = i
      index++
    }
  }
  res.send(even)
})

app.get('/namelength/:name', (req, res) => {
  res.send(`${req.params.name.length}`)
})

//////////////Fruit///////////
app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
  res.send(
    fruits.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
  )
})

app.get('/fruits/:name', (req, res) => {
  res.send(
    fruits.find(({ name }) => {
      return name.toLowerCase() === req.params.name.toLowerCase()
    })
  )
})

app.listen(PORT, () =>
  console.log(`Server up delicious fruits on port ${PORT}`)
)
