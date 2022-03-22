const express = require('express');
const res = require('express/lib/response');
const fruits = require('./fruits');
const PORT = process.env.PORT || 4000;
const app = express();
const name = 'Damascus'
const arr = [1, 2, 3, 4, 5];


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/ping', (req, res) => {
    res.json('pong');
} )

app.get('/greet/:name', ( req, res) => {
    res.send( `Why hello there ${name}!`)

})

app.get('/five', ( req, res ) => {
    res.send( `Here is an array ${arr}`)

})

// Not sure how to use parseInt()

// app.get('/evens/:n', (req, res) => {
//     res.send({parseInt(arr)} )

// })

//Not sure about this one either
app.get('/nameLength/:name', (req, res) => {
    res.send ({ 
       msg: `${request.query.nameLength}`
    })

})

app.get('/fruits', (req, res) => {
    res.send(` Here is an array of fruits ${fruits}`)
  })

  // msg: "undefined"
  app.get('/fruits/:name', (req, res) => {
   res.send({ msg: `${req.params.fruits}`})
  })