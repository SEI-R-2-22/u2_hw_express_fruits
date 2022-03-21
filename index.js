const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/greet/:name', (req, res) => {
    res.send({ 
        msg: `Why hello there, ${req.params.name}`})
})
  
app.get('/five', (req, res) => {
    let myArray = [1,2,3,4,5]
    res.send(myArray)
})

app.get('/evens/:n', (req, res) => {
    let result = []
    let i = 2
    console.log(req.params.n)
    while ( i <= parseInt(req.params.n)) {
        result.push(i);
        i += 2
    }
    
    res.send(result)
})

app.get('/namelength/:name', (req, res) => {
    let name = req.params.name
    res.send(`The length is ${name.length}`)
})

app.get('/fruits', (req, res) => {
    //your code here 
    res.send(fruits)
  })

  app.get('/fruits/:name', (req, res) => {
      let fruit = req.params.name.toLowerCase()
      console.log(fruit)
      const found = fruits.find(item => item.name.toLowerCase() === fruit
      )
      res.send(found)
   })
  


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}`))
