const express = require("express")
const router = express.Router()


var address = require('../models/address')


router.get('/', (req, res) => {

    address.findAll({
        include: users
    }).then(address => {
        res.json(address);
    })

})

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router