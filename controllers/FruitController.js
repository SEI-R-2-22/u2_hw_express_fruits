const res = require('express/lib/response')
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
//   const sortedFruits = fruits.sort((a, b) =>
//     // a.name.localeCompare(b.params.name)
//     {
//       a.params.name > b.params.name ? 1 : b.params.name > a.params.name ? -1 : 0
//     }
//   )
//   console.log(sortedFruits)
//   res.send(sortedFruits)
// }

module.exports = {
  getFruits,
  fruitName
  // fruitSort
}
