const express = require("express")
const app = express()
const products = require('./routes/products')
require("dotenv/config")

const port = process.env.PORT

// Middlewear
app.use('/products', products)

app.listen(port, () => console.log(`Listing on port ${port}`))