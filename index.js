const { response } = require('express')
const express = require('express') 
const fruits = require('./fruits')
const PORT = 3001

const app = express()


app.get('/ping', (request, response) => {
    response.json('pong');
  })

app.get('/greet/:name', (request, response) => {
    response.send(`Hello ${request.params.name}`)
})

app.get('/five', (request, response) => {
    arr = [1, 2, 3, 4, 5]
    respond.send(arr)
})

app.get('/evens/:n', (request, response) => {
    let evens = []
    for (let i = 2; i <= request.params.n; i++){
        if ([i] % 2 === 0){
            evens.push(i)

        }}
        response.send(evens)
})


app.get('/namelength/:name', (request, response) => {
    respond.send(`your name is ${req.params.name.length} letters long`)

})


app.get('/fruits', (request, response) => {
    response.send(fruits)
})

app.get('/fruits/:name', (request, response) => {
    fruit = fruits.find((i) => i.name.toLowerCase() === request.params.name.toLowerCase())
    response.send(fruit)
})



app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))