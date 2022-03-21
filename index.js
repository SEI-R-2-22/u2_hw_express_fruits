const express = require(`express`)
const fruits = require(`./fruits`)
const PORT = process.env.PORT || 3001

const app = express();

app.get(`/ping`, (req, res) => {
    res.json(`pong`)
})

app.get(`/greet/:name`, (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
})

app.get(`/five`, (req, res) => {
    let arr = [1,2,3,4,5] 
    res.send(arr)
})

app.get(`/evens/:n`, (req, res) => {
    let arr = []
    for(let i = 1; i <= parseInt(req.params.n); i++){
        if(i%2 === 0){
            arr.push(i)
        }
    }
    res.send(arr)
})

app.get(`/namelength/:name`, (req, res) => {
    let strLength = req.params.name.length
    res.send(`${strLength}`)
})

app.get(`/fruits`, (req, res) => {
    res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
    fruits.sort((a,b) => {
        if(a.name > b.name){
            return 1
        }else{
            return -1
        }
    })
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    let fruitName = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase()

    let index = fruits.findIndex((fruit) => fruit.name === fruitName )

    res.send(fruits[index])
})

app.get('*', (req, res) => {
    res.send('404 Now Found')
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))