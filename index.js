const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;


const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


//Ping Pong
app.get('/ping', (req, res) => {
    res.json('pong');
  })

//Greet
app.get('/greet/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

//Five
const array = [1,2,3,4,5]
app.get('/five', (req, res) => {
    res.send(array)
} )

//evens
let y = []
app.get('/evens/:n', (req, res) => {
    // while (req.params.n > 0) {
    let x = parseInt(req.params.n)
    //         x-=2
    //         y.push(x)
    // }
    // res.send(y)
    for(let i=2; i<=x; i+=2) {
        y.push(i)
    }
    res.send(y)
})

//namelength
app.get('/namelength/:name', (req, res) => {
    // let x = `${req.params.name}`.length `${x}
    let y = `${req.params.name}`.length.toString()
    res.send(y)
})

//fruits
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

//fruits/:name
app.get('/fruits/:name', (req, res) => {
    x = `${req.params.name}`.toUpperCase()
    const abc = fruits.find((y) => {return y.name.toUpperCase() === x})
    res.send(abc)
})

// //sort
// app.get('/fruits/sort', (req, res) => {
//     const abc = fruits.sort((y) => {return y.name})
//     console.log(abc)
//     res.send(abc)
// })