const express = require('express')
const fruits = require('./fruits')

const PORT = process.env.PORT || 3001;
const app = express()


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/ping', (request,response) => {
    response.json('pong')
})

app.get('/greet/:name', (request, response) => {
    response.send(`why hello there, ${request.params}`)
})


const arr = [1,2,3,4,5]
app.get('/five', (request, response)=> {
    response.send(arr)
})



app.get('/evens/:n', (request,response) => {
    evens = []
    for(let i = 2; i <= request.params.n; i++){
        if(i % 2 === 0){
            evens.push(i)
        }
    }
    response.send({evens})
})



app.get('/namelength/:name', (request,response) =>{
    response.send({msg:
   `${request.params.name.length}` })
})

app.get('/fruits', (request, response) => {
const arr = fruits
    response.send([fruits])
}
)

app.get('/fruits/:name',(request, response)=> {


   findFruit = fruits.find((x) => x.name() === request.params.name())
    
   response.send(findFruit)
})