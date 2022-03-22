

const getName = (req, res) => {
  res.send({msg: `'Why hello there, ${req.params.name}!`})
}
const getFive = (req, res) => {
  let newArray = [1,2,3,4,5]
  res.send({newArray})
}

const getEvens = (req, res) => {
  let newArray = []
  let n = parseInt(req.params.n)
  for(let i = 2; i<=n; i++) {
      if (i % 2 === 0) {
        newArray.push(i)
      }
    }
    res.send({newArray})
}

const getNameLength = (req, res) => {
  let name = req.params.name
  let nameLength = name.length
  res.send({nameLength})
}

module.exports = {
  getName,
  getFive,
  getEvens,
  getNameLength
}