const express = require('express')
const fruits = require('./fruits')
const PORT = 3000
const app = express()

app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/someroute', (req, res) => {
    res.send({
        data: "some data"
    })
})

app.get('/greet/:name', (req, res) => {
    res.send({
        msg: `Why hello there, ${req.params.name}!`
    })
})

app.get('/five', (req, res) => {
    const five = [1, 2, 3, 4, 5]
    res.send(five)
})

app.get('/evens/:n', (req, res) => {
    const n = parseInt(req.params.n)
    const arr =[]
    for (let i = 0; i <= n; i ++) {
        if(i % 2 === 0) {
            arr.push(i)
        }
    }
    res.send(arr)
})

app.get('/namelength/:name', (req, res) => {
    
    res.send(`Youre name has ${req.params.name.length} letters in it!`)

})

// app.get('/namelength/:name', (req, res) => {
    // const str = req.params.name
    // const strLength = str.length
    // res.send(strLength)
// 
// })
//   
//   
  
  
  
  
  
  

app.listen(PORT, () => console.log(`Server is live on ${PORT}`))