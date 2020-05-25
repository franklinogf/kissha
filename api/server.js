const express = require("express")
const app = express()
const cors = require('cors')
const db = require('./database')

const users = require('./routes/users')
const address = require('./routes/address')
const categories = require('./routes/categories')
const products = require('./routes/products')

require("dotenv/config")

const port = process.env.PORT || 5000

db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error))

// Middleware
app.use(cors())
app.use(express.json())
app.use(['/users/:id',"/categories/:id","/address/:id"], (req, res, next) => {
    const { id } = req.params
    if(!Number.isInteger(Number(id))){       
        res.status(500).json({
            status:false,
            message:`:id should be a integer, '${id}' given`
        })
        return
    }
    next()
})
// Routes
app.use('/users', users)
app.use('/address', address)
app.use('/categories', categories)
app.use('/products', products)

// Start Server
app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))