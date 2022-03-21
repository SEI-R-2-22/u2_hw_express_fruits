const e = require('express');
const express = require('express');
const res = require('express/lib/response');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();

// Routes
app.get('/ping', (req, res) => {
    res.json('pong');
})

// /greet/:name Route/Controller:
app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${ req.params.name }`)
})

// /five Route/Controller:
app.get('/five', (req, res) => {
    fiveArr = [1,2,3,4,5]
    res.send(fiveArr)
})

// evens/:n Route/Controller:
app.get('/evens/:n', (req, res) => {
    let arr = [];
    for(let i = 2; i <= req.params.n; i++) {
        if(i % 2 === 0) {
            arr.push(parseInt(i));
        }
    }
    res.send(arr);
})

// namelength/:name Route/Controller:
app.get('/namelength/:name', (req, res) => {
    console.log(req.params.name.length)
    let nameLength = req.params.name.length;
    res.send(`${req.params.name.length}`);
})

// Fruit Routes

// /fruits Route/Controller:
app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// /fruits/:name
app.get('/fruits/:name', (req, res) => {
    let inputFruit = req.params.name.toLowerCase()
    for(let i = 0; i < fruits.length; i++){
        if(inputFruit === fruits[i].name.toLowerCase()) {
            console.log(`We have a match on ${inputFruit}`);
            res.send({
                name: fruits[i].name,
                image_url: fruits[i].imgUrl})
        } else {
            res.send(`No match found for ${inputFruit}`)
        }
    }
})

// Bonus - direction for sort taken from https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
app.get('/fruits/sorted/fruits', (req, res) => {
    fruits.sort((a, b) => {
        let aName = a.name;
        let bName = b.name;
        if ( aName < bName) {
            return -1;
        } else if ( aName > bName ) {
            return 1;
        } else {
            return 0;
        }
    });
    res.send(fruits)
})

// Trying binary search with sorted fruits array:
app.get('/fruits/binary-search/:name', (req, res) => {
    // sorted fruits array
    fruits.sort((a, b) => {
        let aName = a.name;
        let bName = b.name;
        if ( aName < bName) {
            return -1;
        } else if ( aName > bName ) {
            return 1;
        } else {
            return 0;
        }
    });

    let inputFruit = req.params.name.toLowerCase()
    let start = 0;
    let end = fruits.length - 1;

    // direction for binary serach taken from https://stackabuse.com/binary-search-in-javascript/

    while (start <= end) {
        let midpoint = (Math.ceil((start + end) / 2))
        if(inputFruit === fruits[midpoint].name.toLowerCase()) {
            res.send(`${midpoint}`);
        } else if (fruits[midpoint].name.toLowerCase() < inputFruit) {
            start = midpoint + 1;
        } else {
            end = midpoint -1;
        }
    }
    res.send('-1')
})

// Secret Bonus
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(PORT, () => console.log(`Serving up delicious fruits at port ${PORT}`))