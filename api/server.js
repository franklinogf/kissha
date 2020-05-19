const express = require("express")
const app = express()
const products = require('./routes/products')
const categories = require('./routes/categories')
require("dotenv/config")

const port = process.env.PORT

/* ------------------------------- Middlewear ------------------------------- */

app.use(express.json())

/* --------------------------------- Routes --------------------------------- */

app.use('/products', products)
app.use('/categories', categories)



/* ------------------------------ Start server ------------------------------ */

app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))