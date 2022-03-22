const { response } = require('express');
const express = require('express');
const req = require('express/lib/request');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    let nums = [1, 2, 3, 4, 5]
    res.json(nums)
})

app.get('/evens/:n', (req, res) => {
    let n
    let arr = [2, 4, 6, n]
    let arrNums = parseInt(arr)
    let evens = arr.filter(function(item) {
        return (item % 2 == 0)
    })
    console.log(evens)
    res.json(evens)
})

// app.get('/namelength/:name')
//     for (let i = 0; i < `${req.params.name}`.length; i++) {
//         console.log(req.params.name[i])
//     }

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    res.send(`${req.params.name}`)
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))