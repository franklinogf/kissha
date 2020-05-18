const express = require("express")
const router = express.Router()
const mysql = require('../database')

router.get('/',(req,res)=>{
  mysql.query("SELECT * FROM alias",(err,rows,fields)=>{
     if(!err){
        res.json(rows)
     }else{
        console.log(err)
     }
  })
})

module.exports = router