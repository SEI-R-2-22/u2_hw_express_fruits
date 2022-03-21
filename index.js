const express = require('express')
const fruits = require('./fruits')
const PORT = 3000
const app = express()

app.get('/ping', (req, res) => {
    res.json('pong');
  })



app.listen(PORT, () => console.log(`Server is live on ${PORT}`))