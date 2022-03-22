const { request } = require('express');
const { response } = require('express');
const express = require('express');
const response = require('express/lib/response');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();
const randomArray = Math.floor(Math.random()*(5-1+1)+1);
const evens = Math.random()*({n}-2) + 2;

app.get('/ping', (request, response) => {
    response.json('pong');
  })
app.get('/greet/:name', (request, response) => {
    request.params(`hello, there ${request.query.name}!`)
})
app.route('/five', (request, response) => {
    response.send(`${randomArray}`)
})
app.route('/evens/:n', (request, response) => {
    request.params(`${evens}`)
})
app.get('/namelength/:name', (request, response) => {
    response.send(`${request.params.name} is ${str.length}`)
})
app.get('/fruits', (request, response) => {
    fruits;
    response.send(`${request.fruits}`)
})
app.get('/fruits/:name', (request, response) => {

    request.params(`${request.fruitsName}`)
})

app.listen(PORT, () => 
console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
