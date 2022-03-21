const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3000;
const app = express();




app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/someroute', (req, res) => {
    // do something here if necessary before the response
    res.send(data)
    // send data back in response to the incoming request
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

const arr = [1,2,3,4,5]
app.get('/five', (req, res) => {
    res.send(arr)
})

app.get('/evens/:n', (req, res) => {
        let evens = []
        for(let i = 2; i <= req.params.n; i++){
        if([i] % 2 === 0){
        evens.push(i)
        }}
        res.send(evens)
})

app.get('/namelength/:name', (req, res) => {
    res.send(`${req.params.name.length}`)
})

app.get('/fruits', (req,res) => {
    res.send(fruits)
})


app.get('/fruits/:name', (req,res) => {
        findFruit = fruits.find((x) => x.name.toLowerCase() === req.params.name.toLowerCase())
        res.send(findFruit)
})
    


