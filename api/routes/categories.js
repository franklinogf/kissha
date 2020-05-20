const express = require("express")
const router = express.Router()
const { Properties } = require('../helpers/functions')
const categories = require('../models/categories')
const table = 'categories'

router.get('/', (req, res) => {
   eval(table).findAll().then(data => {
      if (data !== null) {
         res.json({
            status: true,
            message: "Ok",
            data: data
         })
      } else {
         res.json({
            status: false,
            message: `No ${table} found`
         })
      }
   })

})

router.get('/:id', (req, res) => {
   const { id } = req.params
   eval(table).findByPk(id).then(data => {
      if (data !== null) {
         res.json({
            status: true,
            message: "Ok",
            data: data
         })
      } else {
         res.json({
            status: false,
            message: `No ${table} found`
         })
      }
   })

})

router.post('/', (req, res) => {
   const data = Properties(req.body)
   eval(table).create(data).then(err => {
      if (err == 1) {
         res.json({
            status: true,
            message: "created"
         })
      } else {
         res.json({
            status: false,
            message: "No created"
         })
      }
   })
})

router.patch('/:id', (req, res) => {
   const { id } = req.params
   const data = Properties(req.body)
   const query = eval(table).update(data, {
      where: { id }
   })
      .then(err => {
         if (err == 1) {
            res.json({
               status: true,
               message: "Updated"
            })
         } else {
            res.json({
               status: false,
               message: "No updated"
            })
         }
      })
})

router.delete('/:id', (req, res) => {
   const { id } = req.params
   eval(table).delete({
      where: { id }
   }).then(err => {
      if (err == 1) {
         res.json({
            status: true,
            message: "Deleted"
         })
      } else {
         res.json({
            status: false,
            message: "No deleted"
         })
      }
   })
})

module.exports = router