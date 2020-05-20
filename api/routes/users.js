const express = require("express")
const router = express.Router()

var users = require('../models/users');
var address = require('../models/address');

users.hasMany(address)
address.belongsTo(users)

router.get('/', (req, res) => {

    users.findAll({
        include: address
    }).then(users => {
        res.json(users);
    })

})

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router