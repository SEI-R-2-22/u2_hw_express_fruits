const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/ping', (req, res) => {
    res.json('pong');
});

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`);
});

app.get('/five', (req, res) => {
    let numArr = [1,2,3,4,5];
    res.send(numArr);
})

app.get('/evens/:n', (req, res) => {
    let num = parseInt(req.params.n);
    let numArr = [];
    for (let i = 2; i <= num; i += 2){
        numArr.push(i);
    }
    res.send(numArr);
})

app.get('/namelength/:name', (req, res) => {
    res.send(`${req.params.name.length}`);
})


app.get('/fruits', (req, res) => {
    res.send(fruits);
})

app.get('/fruits/sort', (req, res) => {
    res.send((fruits.sort((a, b) => a.name.localeCompare(b.name))));
})

app.get('/fruits/:name', (req, res) => {
    let chosenFruit = req.params.name.toLowerCase();
    let fruit = fruits.filter((fruit) => {
        return fruit.name.toLowerCase() === chosenFruit;
    })
    res.send(fruit);
})

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))