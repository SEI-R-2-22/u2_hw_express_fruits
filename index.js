const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;
const app = express();




app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there! ${req.params.name}`)
})

const newArray = [1,2,3,4,5]
app.get('/five', (req, res) => {
    res.send(newArray)
})


app.get('/evens/:n', (req, res) => {
    req.params(`${evens}`)
})
// not sure if this is correct, don't know how to use Parseint

app.get('/namelength/:name', (req, res) => {
    res.send(`${request.params.name}`)
})
app.get('/fruits', (req, res) => {
    fruits;
    res.send(`${req.fruits}`)
})

app.get('/fruits/:name', (req, res) => {

    req.params(`${req.fruitsName}`)
})

  app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))