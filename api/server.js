//LIBRARY IMPORTS
const express = require("express")
const app = express()
const cors = require('cors')
const session = require('express-session')
var SequelizeStore = require('express-session-sequelize')(session.Store);
var passport = require('passport');

//MODULE IMPORTS
const dbConnection = require('./database')
const users = require('./routes/users')
const address = require('./routes/address')
const categories = require('./routes/categories')
const products = require('./routes/products')
const emails = require('./routes/emails')
const phones = require('./routes/phones')
const login = require('./routes/login')
const orders = require('./routes/orders')

require("dotenv").config({path:__dirname+'.env'})
const port = process.env.PORT || 5001

console.log(process.env.PORT)
console.log(process.env.WHITELIST)
console.log(process.env.WHITELIST.split(","))

// TEST DATABASE CONNECTION
dbConnection.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error))


//CORS SETUP

const whitelist = process.env.WHITELIST.split(",")
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

// GENERAL MIDDLEWARES
app.use(cors(corsOptions))
app.use(express.json())

//SESSION SETUP
const sessionStore = new SequelizeStore({db:dbConnection})

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
  }
}));

//PASSPORT AUTHENTICATION
require('./passport');
app.use(passport.initialize());
app.use(passport.session());


//VERIFICATION MIDDLEWARES
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

// ROUTES
app.use('/users', users)
app.use('/address', address)
app.use('/categories', categories)
app.use('/products', products)
app.use('/emails', emails)
app.use('/phones', phones)
app.use('/orders',orders)
app.use('',login)



// START SERVER
app.listen(port, () => console.log(`
Listing on port ${port}

Open it on: http://localhost:${port}
`))