const express = require("express")
const router = express.Router()
const mysql = require('../database')

/*product routes*/ 
// this is a test from the miguel side
router.get('/',(req,res)=>{
  mysql.query("SELECT * FROM categories",(err,rows,fields)=>{
     if(!err){
        res.json(rows)
     }else{
        console.log(err)
     }
  })
})



module.exports = router