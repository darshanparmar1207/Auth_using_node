// const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const port = 3000

// app.use(cookieParser())

// Set cookie 
app.get('/', (req, res) => 
    res.cookie('name', 'User')
.send('Cookie has been set!'))

app.get('/read', (req, res) => {
    // Access cookies from the request
    console.log(req.cookies) 
    res.send("read")
})

app.listen(3000)