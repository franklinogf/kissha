const express = require("express")
const app = express()
const products = require('./routes/products')
const categories = require('./routes/categories')
require("dotenv/config")

const port = process.env.PORT

// Middlewear
app.use('/products', products)

app.use('/categories', categories)

app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))