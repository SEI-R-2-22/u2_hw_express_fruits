const greetName = (req, res) => {
  res.send({
    msg: `why hello there, ${req.params.name}`
  })
}
const getFive = (req, res) => {
  let oneToFive = [1, 2, 3, 4, 5]
  res.send({
    msg: `${oneToFive}`
  })
}
const getEvens = (req, res) => {
  const arr = []
  let i = 2
  while(i <= req.params.n) {
    arr.push(i)
    i+= 2
  }
  res.send(arr)
}
const nameLength = (req, res) => {
  let userName = req.params.name.length
  res.send({
    msg: `${userName}`
  })
}


module.exports = {
  greetName,
  getFive,
  getEvens,
  nameLength
}