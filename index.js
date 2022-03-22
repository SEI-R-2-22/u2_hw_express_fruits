const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/someroute', (req, res) => {
    res.send(responseData)
  })

app.get('/greet/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}`)
})  

const array = [1, 2, 3, 4,  5]
app.get('/five' , (req, res) => {
    res.send(array)
})

app.get('/evens/:n', (req, res)=>{
    evens = []
    for (let i=3; i <= req.params.n; i++){ 
        if(i % 2 === 0 ){
            evens.push(i)
        }
    }   
    res.send({evens})
})

app.get('/namelength/:name', (req, res)=> {
   
    res.send(`The length is ${req.params.name.length}`)
}) 

app.get('/fruits', (req, res) => {
  res.send(fruits)
  })

app.get('/fruits/:name', (req, res) => {
    findFruit= fruits.find((x)=>
        x.name.toLowerCase() === req.params.name.toLowerCase()
    )
    res.send(findFruit)
})


/// Bonus //////////////////////////////////
app.get('*', (req, res) => {
    res.send('404 Page Not Found')
  })