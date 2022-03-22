const express = require('express')
const req = require('express/lib/request')
const fruits = require('./fruits')

const PORT = process.envPORT || 3001

const app = express()

//Routes

app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/greet/:name', (reg, res) => {
    res.send(`Why hello there ${req.params.name}!`)
})

const arrayNum = [1, 2, 3, 4, 5]

app.get('/five', (req,res) => {
    res.send(arrayNum)
})

let n = function(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 0) {
            return element
        }
       return n = parseInt(element)
    }
}

app.get('/evens/:n', (req, res) => {
    res.send([ n ])
})

app.get('/namelength/:name', (req, res) => {
    res.send(`${req.params.name.length}`)
})

app.get('fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    res.send(`${req.params.name === 'apple'}`)
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


