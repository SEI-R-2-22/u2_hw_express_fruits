const express = require('express')
const fruits = require('../fruits')

const Pong = (req, res) => {
  res.json('pong')
}

const Greet = (req, res) => {
  res.send({
    msg: `Why hello there, ${req.params.name}`
  })
}

const Five = (req, res) => {
  const array = [1, 2, 3, 4, 5]
  res.send(array)
}

const Evens = (req, res) => {
  const number = parseInt(req.params.n)
  const array = []
  for (let i = 0; i < number; i += 2) {
    array.push(i + 2)
  }
  res.send(array)
}

const NameLength = (req, res) => {
  const name = req.params.name.length
  res.send(name.toString())
}

const Fruits = (req, res) => {
  res.send(fruits)
}

const FruitsSort = (req, res) => {
  // let array = fruits.map((fruit) => fruit.name)
  let array = fruits.sort((a, b) => a.name.localeCompare(b.name))
  res.send(array)
}

const FruitsName = (req, res) => {
  const selected = fruits.find(
    (fruit) => req.params.name.toLowerCase() === fruit.name.toLowerCase()
  )
  res.send(selected)
}

const MuchPower = (req, res) => {
  res.send('404 Not Found')
}

module.exports = {
  Pong,
  Greet,
  Five,
  Evens,
  NameLength,
  Fruits,
  FruitsSort,
  FruitsName,
  MuchPower
}
