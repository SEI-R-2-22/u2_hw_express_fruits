const express = require('express')
const { json } = require('express/lib/response')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3000


const app = express()



app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})

app.get('/ping', (req, res) => {res.json('pong')})

app.get('/greet/:name', (req, res) => {
    res.send({msg: `Why hello there, ${req.params}`})
})

app.get(`/evens/:n`, (req, res) => {
    let n = req.params
    for(let i=0; i<=n; i++){
        if(i % 2 == 0){
            let nums = [...nums]
            nums.push(i)
        }else if(i % 2 !== 0){
            console.log('not an even number')
        }
    }
    res.send(`${nums}`)
})

app.get('/namelength/:name', (req, res) => {
    res.send({
        msg: `${req.params.name} has ${req.params.name.length} letters in their name`
    })
})

app.get('/fruits/:name', (req,res) => {
    res.send(req.params)
})

app.get('/fruits/sort', (req, res) => {
    // implement sort
    const sortedFruits = res.fruits.sort()
    res.send(`${sortedFruits}`)
})
  