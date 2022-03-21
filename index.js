const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3000
const app = express()

app.listen(
    PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🫠 `)
    )





app.get('/ping', (req, res) => {
     res.json('pong');
    })


////////////greet/:name
app.get('/greet/:name', (req, res) => {
    res.send(`why hello there, ${req.params.name}`)
});


/////////////five
Num = [1, 2, 3, 4, 5]
app.get('/five', (req, res) => {
    res.send(`${Num}`)
})


/////////////evens/:n
app.get('/evens/:n', (req, res) => {
    const arr = []
    const n = parseInt(req.params.n)
    //Do I have to have n>=2 here???
    if (n >= 2 ) {
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        arr.push(i)
      }}
    }
    res.send(arr)
  })


////////////namelength/:name
app.get('/namelength/:name', (req, res) => {
    res.send({msg:`the name you entered is ${req.params.name.length} letters long`})
})
