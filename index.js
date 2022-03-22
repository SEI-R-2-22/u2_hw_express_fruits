const express = require('express');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3001;

const app = express();
//code will be written below

app.get('/ping', (req, res)=>{
    res.json('pong')
})
app.get('/greet/:name', (req, res) => {
   res.json(`Greetings, ${req.params.name}`) //<-use `` for string interppolation
 })
app.get('/five', (req, res)=>{
    const nums=[1,2,3,4,5]
  console.log(nums)  
    res.json(nums)
})

app.get('/evens/:n', (req, res)=>{
  
//don't understand this one 
  res.json()
})

app.get('/namelength/:name', (req, res)=>{
  const nameLength = (name) =>{
    return name.length
  }
  console.log(nameLength)
  res.json(nameLength(`${req.params.name}`))
})



//HAD FAMILY EMERGENCY. I WILL FINISH THE REST BEFORE MONDAY
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))