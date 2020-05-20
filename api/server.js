const express = require("express")
const app = express()
const db = require('./database')
const users = require('./routes/users')
const address = require('./routes/address')
const categories = require('./routes/categories')

require("dotenv/config")

const port = process.env.PORT || 5000

db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error))

// Middlewear
app.use(express.json())

// Routes

app.use('/users', users)
app.use('/address', address)
app.use('/categories', categories)

// Start Server
app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))