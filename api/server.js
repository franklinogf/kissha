const express = require("express")
const app = express()
require("dotenv/config")
const db = require('./database')
const users = require('./routes/users')
const address = require('./routes/address')

const port = process.env.PORT

db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error))

// Middlewear

app.use(express.json())

// Routes

app.use('/users', users)
app.use('/address', address)

// Start Server

app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))