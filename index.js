const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001

const app = express()

// Test
app.get('/ping', (req, res) => {
  res.json('Pong')
})

// No. 1
app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
})

// No. 2
app.get('/five', (req, res) => {
  let fiveArr = [1, 2, 3, 4, 5]
  res.send(fiveArr)
})

// No. 3
app.get('/evens/:n', (req, res) => {
  let evenArr = [2, 3, 4, 5, 6]
  let n = parseInt(req.params.n)
  evenArr.push(n)

  const evenFilter = evenArr.filter((x) => {
    return x % 2 === 0
  })

  res.send(evenFilter)
})

// No. 4
app.get('/namelength/:name', (req, res) => {
  res.json(`${req.params.name.length}`)
  // Source Credit: Guillermo P!!
})

// No. 5
app.get('/fruits', (req, res) => {
  res.send(fruits)
})

// Bonus
// app.get('/fruits/sort', (req, res) => {
//   let fruitMap = fruits.filter((fruit) => {
//     return fruit.name
//   })
//  let fruitabet = fruitMap.sort()
//   res.send(fruitabet)
// })

// No. 6
app.get('/fruits/:name', (req, res) => {
  let fruity = req.params.name
  const fruitFinder = fruits.find((fruit) => {
    return fruit.name.toLowerCase() === fruity.toLowerCase()
  })
  res.send(fruitFinder)
})

app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)
