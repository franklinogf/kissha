const express = require("express")
const router = express.Router()
const mysql = require('../database')
const updateQuery = require('../helpers/functions');
// global variables
const __table = "categories";

router.get('/', (req, res) => {
   mysql.query(`SELECT * FROM ${__table}`, (err, rows, fields) => {
      if (!err) {
         res.json({
            status: true,
            message: "Ok",
            data: rows
         })
      } else {
         console.log(err)
      }
   })
})

router.get('/:id', (req, res) => {
   const { id } = req.params
   mysql.query(`SELECT * FROM ${__table} WHERE id = ?`, id, (err, rows, fields) => {
      if (!err) {
         if (rows.length > 0) {
            res.json({
               status: true,
               message: "Ok",
               data: rows[0]
            })
         } else {
            res.json({
               status: false,
               message: "Not category found"
            })
         }
      } else {
         console.log(err)
      }
   })
})

router.patch('/:id/', (req, res) => {
   const { id } = req.params
   const [setQuery, whereValues] = updateQuery(req.body)

   mysql.query(`UPDATE ${__table} SET ${setQuery} WHERE id = ?`, [...whereValues, id], (err, rows, fields) => {
      if (!err) {
         res.json({
            status: true,
            message: "Ok",
            data: rows[0]
         })
      } else {
         res.json({
            status: false,
            message: err
         })
      }
   })
})


router.delete('/:id', (req, res) => {
   const { id } = req.params
   mysql.query(`DELETE FROM ${__table} WHERE id = ?`, id, (err, rows, fields) => {
      if (!err) {
         res.json({
            status: true,
            message: "Deleted"
         })
      } else {
         res.json({
            status: false,
            message: err
         })
         console.log(err)
      }
   })
})
module.exports = router