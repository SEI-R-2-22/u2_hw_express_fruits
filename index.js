const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/greet/:name', (req,res) => {
    res.json(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    res.json([1,2,3,4,5])
})

app.get('/evens/:n', (req, res) => {
    const evens = (n) =>{
        nums = parseInt(n)
        even = 2
        arr = [even]
        while (even < n) {
            arr.push(even += 2)
        }
    return arr
    }
    res.json(evens(`${req.params.n}`))
})

app.get('/namelength/:name', (req, res) => {
    res.json(`The length of name is ${req.params.name.length}`)
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    fruit = {}
    fruits.forEach((item) =>{
        fruit.push(item)
    }
    )
    if (req.params.name === fruit.name.toLowerCase()) {
        res.send(fruit)
    }
})

app.listen(PORT, () => 
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
)