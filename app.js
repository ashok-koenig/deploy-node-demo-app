const express = require('express')
const app = express()
const port = 5100
app.get('/', (req, res)=>{
    res.send('<h1>This is node app default URL response</h1>')
})

app.get('/about', (req, res)=>{
    res.send('<h1>This is node app about URL response</h1>')
})

app.get('/users', (req, res)=>{
    let users = [
        {id: 1, username: "user1", role: "user"},
        {id: 2, username: "user2", role: "user"},
        {id: 3, username: "admin1", role: "admin"}
    ]
    res.json(users)
})

app.get('/products', (req, res)=>{
    let products = [
        {id: 1, title: "iPhone 16", price: 12312},
        {id: 2, title: "iPhone 15", price: 1233},
        {id: 3, title: "iPhone 14", price: 1231}
    ]
    res.json(products)
})


app.listen(port, ()=> console.log(`Server is running at http://localhost:${port}`))
