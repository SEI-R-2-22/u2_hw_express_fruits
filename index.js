const express = require('express');
const { all } = require('express/lib/application');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;

const app = express();
//Middleware





//ROUTES

app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/greet/:name', (req, res) => {
    res.json(`Why hello there, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    res.json([1, 2, 3, 4, 5])
})

app.get('/evens/:n', (req, res) => {
    const evenNumbers = (n) => {
        let number = parseInt(n)
        let even = 2
        let arr = [even]
        while(even < number) {
        arr.push(even += 2)
    } 
    return arr
    } 
     
    res.json(evenNumbers(`${req.params.n}`))
})

app.get('/namelength/:name', (req, res) => {
    const lengthOfName = (name) => {
        return name.length
    }
    res.json(lengthOfName(`${req.params.name}`))
})

app.get('/fruits', (req, res) => {
    
    res.send(fruits)
  })

  app.get('/fruits/:name', (req, res) => {
 
    let fruitName = req.params.name.toLowerCase()
    const found = fruits.find(fruit => fruitName === fruit.name.toLowerCase())

    res.send(found)
  })

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))