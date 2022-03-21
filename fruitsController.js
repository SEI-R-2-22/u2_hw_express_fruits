const fruits = require('./fruits')

const getFruits = (req, res) => {
    res.send({results: fruits})
}

const getFruitByName = (req, res) => {
    let result =   fruits.find((fruit) =>  (fruit.name.toLowerCase() === req.params.name.toLowerCase()))
    res.send(result)
}

const getSortedFruits = (req, res) => {
    let results = fruits.sort((a, b) => a.name.localeCompare(b.name))
    res.send({results: results})
}

module.exports  = {
    getFruits,
    getFruitByName,
    getSortedFruits
}