const fruits = require('../fruits')

const getFruits = (req, res) => {
  res.send({ ...fruits })
}

const fruitName = (req, res) => {
  const findFruit = fruits.find(
    (fruit) => fruit.name.toLowerCase() === req.params.name.toLowerCase()
  )
  res.send(findFruit)
}

// const fruitSort = (req, res) => {
//   const sortedFruits = fruits.sort(fruitName())
//   res.json(`${req.params.sortedFruits}`)
// }

module.exports = {
  getFruits,
  fruitName
  // fruitSort
}
