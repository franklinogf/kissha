const express = require("express")
const router = express.Router()
const table = require('../models/users')


router.get('/', (req, res) => {
    table.findAll({
        attributes: ['email']
    }).then(data => {
        if (data.length > 0) {
            res.json({
                status: true,
                message: "Ok",
                data: data
            })
        } else {
            res.json({
                status: false,
                message: `No data found`
            })
        }
    })

})

module.exports = router