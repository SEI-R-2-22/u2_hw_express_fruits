const express = require("express")
const fruits = require("./fruits")
const PORT = process.env.PORT || 3001
const app = express()
app.listen(PORT, () => console.log(`Serving up succulent fruits on port ${PORT}`))

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.get('/routeexercise', (req, res) => {
    res.send({ msg: 'a test. a test.'})
})

app.get('/greet/:name', (res, req) => {
    res.send({ msg: `Why hello there, ${req.params.name}`})
})

app.get('/five', (req, res) => {
    const five = [1, 2, 3, 4, 5]
    res.send(five)
})

app.get('/evens/:n', (req, res) => {
    let arr = []
    for (let i = 2; i <= parseInt(req.params.n); i += 2) {
        arr.push(i);
    }
    res.send(arr)
})

app.get('/namelength/:name', (req, res) => {
    let nameInput = req.params.name
   res.send(`${nameInput.length}`)
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    oneFruit = fruits.find((fruit) => {
        fruit.name.toLowerCase() === req.params.name.toLowerCase
    })
    res.send(oneFruit)
})

app.get('/fruit/sort', (req, res) =>{
    let fruitSort = fruits.sort((a, b) => a.name.localeCompare(b.name))
    res.send(fruitSort)
})

app.get('*', (req, res) => {
    res.send('404 Page Not Found')
  })

