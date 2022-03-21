const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001;

const app = express()


app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/greet/:name', (req, res) =>
    res.send(`Why hello there, ${req.params.name}`)
)

app.get('/five', (req, res) => {
    const arrOfFive = [1,2,3,4,5]
    console.log(arrOfFive)
    res.send(arrOfFive)
})

app.get('/evens/:n', (req, res) =>{
    let userNum = parseInt(req.params.n)
    let newArr = []
    for(let i=2; i<=userNum; i++) {

        if(i%2===0) {

            newArr.push(i)
        }
    }

    res.send(newArr)

})



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}  🍒`))