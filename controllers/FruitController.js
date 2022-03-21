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

module.exports = {
  greet,
  five,
  evens,
  nameLength,
  getFruits
}
