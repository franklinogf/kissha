const mysql = require('mysql')
require("dotenv/config")
const mysqlConnection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
})

mysqlConnection.connect((err) => {
   if (err) {
      console.log(err)
      return
   }
   console.log("Database connected");
});

module.exports = mysqlConnection