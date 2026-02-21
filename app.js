const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const port = 3000

app.use(cookieParser())

// Encrypt Password 
// app.get('/', (req, res) => {
//    bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("myPlaintextPassword", salt, function(err, hash) {
//         console.log(hash)
//     });
// });
// })

// Compare Password
// app.get('/', (req, res) => {
//     bcrypt.compare("myPlaintextPassword", "$2b$10$QxT5sOhsrecbIM7DvXmoKe7tZa8ZYeYLxHWx3wkCC9upJyTPUrVrW", function(err, result) {
//     console.log(result) // true or false
// });
// })

// JWT Sign
app.get('/', (req, res) => {
     let token = jwt.sign({email: "user@example.com" }, "secret")
     res.cookie("token", token)
     res.send("Token has been generated and set in cookie!")
})

// JWT Verify
app.get('/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log( data )
})


// Set cookie 
// app.get('/', (req, res) => 
//     res.cookie('name', 'User')
// .send('Cookie has been set!'))

// app.get('/read', (req, res) => {
//     // Access cookies from the request
//     console.log(req.cookies) 
//     res.send("read")
// })

app.listen(3000)