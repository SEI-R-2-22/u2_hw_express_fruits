const express = require('express');
const fruits = require('./fruits');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/ping', (req, res) => {
    res.json('pong');
    }
)



app.get('/greet/:name', (req, res) => {

    res.send(`Why hello there, ${req.params.name}`)

})

app.get('/five', (req, res) => {

    const numArr = [1, 2, 3, 4, 5]
    res.send(numArr)

})

app.get('/evens/:n' , (req, res) => {

    let num = parseInt(req.params.n)
    let numArr = []
    if (num >= 2) {

        

        for (i=2;i<=num+1;i+=2) {

            if(i<=num) {

                numArr.push(i)

            }else if (i>=num) {

               

            }

        }



    }

    res.send(numArr)

})


app.get('/namelength/:name', (req, res) => {


    let name = req.params.name

    res.send(`${name.length}`)


})

app.get('/fruits', (req, res) => {
    //your code here 
    res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {

    let fruitName = req.params.name.toLowerCase()
    
    

    const namedFruit = fruits.find(({name}) => name.toLowerCase() === fruitName )

        
        

    res.send(namedFruit)



   


})




app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))
