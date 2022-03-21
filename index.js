const express = require('express')
const fruits = require('./fruits')

const PORT = process.env.PORT || 3000

const app = express()

// Gets
//Ping pong the server talks
app.get('/ping',(req,res) =>{
    res.json('pong')
})

//greet someone with :name
app.get('/greet/:name',(req,res) =>{
    res.send(`Why hello there, ${req.params.name}`)
})
// show an arry of 5
let num5 = [1,2,3,4,5]
app.get('/five',(req,res)=>{
    res.send(num5)
})

const countEvens = (n)=>{
    for(let i = 2; i < n; i+2){
        nums.push(i)
    }
    return nums
}



app.get('/evens/:num',(req,res)=>{

    let num = parseInt(req.params.num)
    let nums = []
    for(let i = 2; i <= num; i+=2){
        nums.push(i)
    }
    res.send(nums)
})

app.get('/namelength/:name',(req,res)=>{
    res.send(`${req.params.name.length}`)
})

app.get('/fruits',(req,res)=>{
    let fList = []
    for( let i=0;i < fruits.length;i++){
        fList.push(fruits[i].name)
    }
    res.send(fList)
})

app.get('/fruits/:name',(req,res)=>{

    let found = fruits.find(n => n.name.toLowerCase() === req.params.name.toLowerCase())
    res.send(found)

})







//Keep Listen at the bottom of the file
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))