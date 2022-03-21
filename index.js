const express = require('express')
const res = require('express/lib/response')
const fruits = require('./fruits')
const fruitsController = require('./fruitsController')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', (req,res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})
app.get('/five', (req, res) => {
    const five = [1,2,3,4,5]
    res.send(five)
})
app.get('/evens/:n', (req, res) => {
    let arr = []
    for (let i = 2; i <= req.params.n; i =i + 2) {
        arr.push(i)
    }
    res.send(arr)
})
app.get ('/namelength/:name' , (req, res) => {
    res.send((req.params.name).length.toString())
})

app.get('/fruits' , fruitsController.getFruits )
app.get('/fruits/sort', fruitsController.getSortedFruits)
app.get('/fruits/:name', fruitsController.getFruitByName)

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })       

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))