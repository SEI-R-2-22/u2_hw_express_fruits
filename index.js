const express = require(`express`)
const frfuits = require(`./fruits`)
const PORT = process.env.PORT || 3000

const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

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

app.get