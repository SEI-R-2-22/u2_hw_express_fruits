const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const myControllers = require('./controllers/MyControllers')


const app = express();

app.get('/ping', (req, res) => {
  res.json('pong');
})
///
app.get('/greet/:name', myControllers.greetName)
app.get('/five', myControllers.getFive)
app.get('/evens/:n', myControllers.getEvens)
app.get('/namelength/:name', myControllers.nameLength)
app.get('/fruits', fruits.getFruits)
app.get('/fruits/:name', fruits.getFruitName)





app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))