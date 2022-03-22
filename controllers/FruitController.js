const fruits = require('../fruits')

const greet = (req, res) => {
  res.send(`Why hello there, ${req.params.name}!`)
}

const five = (req, res) => {
  let arr = [1, 2, 3, 4, 5]
  res.send(arr)
}

const evens = (req, res) => {
  let arr = []
  let num1 = 2
  let num2 = parseInt(`${req.params.n}`)
  while (num2 > num1) {
    arr.push(num1)
    num1 += 2
  }
  arr.push(num2)
  res.send(arr)
}

const nameLength = (req, res) => {
  res.send(`${req.params.name.length}`)
}

const getFruits = (req, res) => {
  res.send(fruits)
}

const fruitName = (req, res) => {
  let fruit = fruits.find(
    (fruit) =>
      fruit.name === `${req.params.name}` ||
      fruit.name.toLowerCase() === `${req.params.name}`
  )
  res.send(fruit)
}

const sortFruits = (req, res) => {
  res.send(
    fruits.sort(function (a, b) {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })
  )
}

const catchAll = (req, res) => {
  res.send('404 Not Found')
}

module.exports = {
  greet,
  five,
  evens,
  nameLength,
  getFruits,
  fruitName,
  sortFruits,
  catchAll
}
