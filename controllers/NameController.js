const greetName = (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
}

const five = (req, res) => {
  const arr = [1, 2, 3, 4, 5]
  console.log(arr)
  res.send(arr)
}

const evens = (req, res) => {
  const evenNumbers = (n) => {
    let even = []
    let i = 0
    while (i <= n) {
      even.push(i)
      i += 2
    }
    return even
  }
  res.send(evenNumbers(req.params.n))
}

const nameLength = (req, res) => {
  res.send(`${req.params.name.length}`)
}

module.exports = {
  greetName,
  five,
  evens,
  nameLength
}
