const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001
const app = express()



app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', ( req, res ) => {
    res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    const nums = [1, 2, 3, 4, 5]
    res.send(nums)
})

app.get('/evens/:n', ( req, res ) => {
    let ev = []
    for (let i = 2; i <= parseInt(req.params.n); i+= 2) {
        ev.push(i)
    }
    res.send(ev)
})

app.get('/fruits', ( req, res ) => {
    res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
    const sorted = fruits.sort((a, b) => {
        const A = a.name.toLowerCase()
        const B = b.name.toLowerCase()
        if (A < B) {
            return -1
        }
        else if (B > A) {
            return 1
        }
        else {
            return 0
        }
    })
    res.send(sorted)
})

app.get('/fruits/:name', (req, res) => {
    function finder(fruit) {
        return fruit.name.toLowerCase() === req.params.name.toLowerCase()}
    res.send(fruits.find(finder))
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}`))