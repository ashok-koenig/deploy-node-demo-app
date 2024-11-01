const express = require('express')
const app = express()
const port = 5100
app.get('/', (req, res)=>{
    res.send('This is node app default URL response')
})

app.get('/about', (req, res)=>{
    res.send('This is node app about URL response')
})

app.listen(port, ()=> console.log(`Server is running at http://localhost:${port}`))
