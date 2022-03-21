const express = require('express');
const fruits = require('./fruits');

const PORT = process.env.PORT || 3000;

const app = express();

//ROUTES
app.get('/', (req, res)=> {
  res.send("Test");
});

app.get('/ping', (req, res) => {
  res.json('pong');
})

// BASIC FORMAT
app.get('/someroute', (req,res) => {
  res.send(data);
})


// /GREET/:NAME
app.get('/greet/:name', (req,res) => {
  res.send(`Why hello there, ${req.params.name}!`);
})


// /FIVE
let oneThruFive = [1, 2, 3, 4, 5];

app.get('/five', (req, res) => {
  res.send({"firstFive": oneThruFive});
})


// /EVENS/:N
app.get('/evens/:n', (req, res) => {
  let evensArr = [];
  for (let i=2; i <= parseInt(req.params.n); i=i+2) {
    evensArr.push(i);
  }
  res.send({evensArr});
})

// NAMELENGTH/:NAME
app.get('/namelength/:name', (req, res) => {
  res.send(`The length of the name ${req.params.name} is ${req.params.name.length}`);
})


// FRUITS
app.get('/fruits', (req, res) => {
  res.send(fruits);
})

// BONUS: SORT FRUITS (has to go first, otherwise /fruits/:name supercedes it!!)
app.get('/fruits/sort', (req, res) => {
  let sortedArr = fruits.sort((a, b) => {
    if (a.name > b.name) return 1;
    else return -1;
  });
  res.send(sortedArr);
})

// FRUITS/:NAME
app.get('/fruits/:name', (req, res) => {
  let myFruit = fruits.find( (f) => f.name.toLowerCase() == req.params.name.toLowerCase());
  res.send(`Fruit: ${myFruit.name} ...Or, the whole object: ${JSON.stringify(myFruit)}`)
})

app.get('*', (req, res) => {
  res.send('404 Page Not Found')
})




app.listen(PORT, () => console.log(`getting fruit on port ${PORT}`));