const express = require("express")
const router = express.Router()
const mysql = require('../database')
const { updateQuery, insertQuery } = require('../helpers/functions');


// global variables
const _table = "categories";

router.get('/', (req, res) => {
   mysql.query(`SELECT * FROM ${_table}`, (err, rows, fields) => {
      if (!err) {
         res.json({
            status: true,
            message: "Ok",
            data: rows
         })
      } else {
         res.json({
            status: false,
            message: err
         })
      }
   })
})

router.get('/:id', (req, res) => {
   const { id } = req.params
   mysql.query(`SELECT * FROM ${_table} WHERE id = ?`, id, (err, rows, fields) => {
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
               message: `Not ${_table} found`
            })
         }
      } else {
         res.json({
            status: false,
            message: err
         })
      }
   })
})

router.post('/', (req, res) => {
   const [query, whereValues] = insertQuery(req.body)

   mysql.query(`INSERT INTO ${_table} ${query}`, [...whereValues], (err, rows, fields) => {
      if (!err) {
         res.json({
            status: true,
            message: "Inserted",
         })
      } else {
         res.json({
            status: false,
            message: err
         })
      }

   })
})

router.patch('/:id/', (req, res) => {
   const { id } = req.params
   const [setQuery, whereValues] = updateQuery(req.body)

   mysql.query(`UPDATE ${_table} SET ${setQuery} WHERE id = ?`, [...whereValues, id], (err, rows, fields) => {
      if (!err) {
         res.json({
            status: true,
            message: "Updated",
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
   mysql.query(`DELETE FROM ${_table} WHERE id = ?`, id, (err, rows, fields) => {
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
      }
   })
})
module.exports = router