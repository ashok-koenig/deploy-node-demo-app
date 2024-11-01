const express = require('express')
const app = express()
const port = 5100
app.get('/', (req, res)=>{
    res.send('<h1>This is node app default URL response</h1>')
})

app.get('/about', (req, res)=>{
    res.send('<h1>This is node app about URL response</h1>')
})

app.listen(port, ()=> console.log(`Server is running at http://localhost:${port}`))
