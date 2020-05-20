const express = require("express")
const router = express.Router()
const { Properties } = require('../helpers/functions')
const categories = require('../models/categories')

router.get('/', (req, res) => {

   categories.findAll().then(categories => {
      if (categories !== null) {
         res.json({
            status: true,
            message: "Ok",
            data: categories
         })
      } else {
         res.json({
            status: false,
            message: `No categories found`
         })
      }
   })

})

router.get('/:id', (req, res) => {
   const { id } = req.params
   categories.findByPk(id).then(category => {
      if (category !== null) {
         res.json({
            status: true,
            message: "Ok",
            data: category
         })
      } else {
         res.json({
            status: false,
            message: `No categories found`
         })
      }
   })

})

router.post('/', (req, res) => {
   const data = Properties(req.body)
   categories.create(data).then(err => {
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
   const query = categories.update(data, {
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
   categories.delete({
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