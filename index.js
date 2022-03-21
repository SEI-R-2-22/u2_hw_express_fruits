const express = require('express')
const fruits = require('./fruits')
const PORT = process.env.PORT || 3001;

const app = express()


app.get('/ping', (req, res) => {
    res.json('pong');
})

app.get('/five', (req, res) => {
    const arrOfFive = [1,2,3,4,5]
    console.log(arrOfFive)
    res.send(arrOfFive)
})

app.get('/fruits', (req, res) => {
    res.json(fruits)
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

app.get('/greet/:name', (req, res) =>
    res.send(`Why hello there, ${req.params.name}`)
)

app.get('/namelength/:name', (req, res) => {
    let userNameLength = req.params.name.length
    // let lengthOfName = userName.length
    res.send(userNameLength.toString())
})



app.get('/fruits/:name', (req, res) => {
    const selected = fruits.find( (fruit) => req.params.name.toLowerCase() === fruit.name.toLowerCase())

        res.send(selected)


})



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}  🍒`))