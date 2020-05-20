const express = require("express")
const router = express.Router()
const { Properties } = require('../helpers/functions')
const categories = require('../models/categories')

router.get('/', (req, res) => {

   categories.findAll().then(category => {
      res.json(category)
   })

})

router.get('/:id', (req, res) => {
   const { id } = req.params
   categories.findByPk(id).then(category => {
      res.json(category)
   })

})

router.post('/', (req, res) => {
   const data = Properties(req.body)
   categories.create(data)
})

router.patch('/:id', (req, res) => {
   const { id } = req.params
   const data = Properties(req.body)
   categories.update(data, {
      where: { id }
   }).then(category => {
      res.json(category)
   })
})

router.delete('/:id', (req, res) => {
   const { id } = req.params  
   categories.delete({
      where: { id }
   }).then(category => {
      res.json(category)
   })
})

module.exports = router