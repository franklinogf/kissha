const express = require("express")
const app = express()
const cors = require('cors')
const db = require('./database')



const users = require('./routes/users')
const address = require('./routes/address')
const categories = require('./routes/categories')
const products = require('./routes/products')
const emails = require('./routes/emails')
const login = require('./routes/login')
require("dotenv").config({path:__dirname+'.env'})
const port = process.env.PORT || 5000

db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error))




// Middleware
const whitelist = ['http://localhost:8000']
const corsOptions = {
  origin: (origin,callback) => {
    const exists = whitelist.some(domain => domain === origin)
    if(exists){
      callback(null,true)
    } else {
      callback(new Error('Blocked By CORS'))
    }
  },credentials: true
}
app.use(cors(corsOptions))
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
app.use('/emails', emails)
app.use('',login)

// Start Server
app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))