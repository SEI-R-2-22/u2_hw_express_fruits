const { response } = require('express');
const express = require('express');
const req = require('express/lib/request');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3001;
const app = express();





///Routes
app.get('/ping', (req, res) => {
    res.json('pong');
  })


  app.get('/greet/:name', (req, res) => {
   console.log('someroute')
    res.send('Why hello there Obiwan Kenobi')
    // send data back in response to the incoming request
  })

  app.get('/five', (req, res) => {
      const arrayOfNumbers = [1, 2, 3, 4, 5]
          res.send(arrayOfNumbers)
      }
  )

  app.get('/evens/:n', (req, res) =>{
      let evens = []
        const array = [2, 4, 6]
        let n = parseInt(req.params.n)
       if(n % 2 === 0){
           for(let i = 0; i <= n; i+=2) {
         evens.push(i)
     }
        res.send(evens)
       }else{
           res.send('bananas')
       }
     
     
  } 
  )

  app.get('/namelength/:name', (req, res)=>{   
      let name = req.params.name.length;
       res.send(`${req.params.name.length}`)
     

  })


  app.get('/fruits', (req, res) => {
       res.send([fruits])
  })

  app.get('/fruits/:name', (req, res) => {
    let fruitSort = req.params.name.toLowerCase();
        const found =fruits.find(fruit => fruit.name.toLowerCase()===fruitSort)

    res.send(found)
    //your code here
    // HINT - you can use a higher-order array method 
  })


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))