const express = require("express");
const router = express.Router();
const table = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  //Extract
  let { email, phone, password } = req.body;
  //To Lowercase
  if (email) {
    email = email.toLowerCase();
  }
  //Exchange where statement
  function whereStatement(email, phone) {
    if (email && !phone) {
      return { email };
    } else if (!email && phone) {
      return { phone };
    }
  }

  //query
  table
    .findOne({
      where:  whereStatement(email,phone)
    })
    .then((data) => {
      //get the data, now test the password
      if (data !== null) {
        let user = data.dataValues;
        //bycrypt compare
        bcrypt.compare(password, user.password, (bcryptErr, verified) => {
          // time to login
          if (verified) {
            res.json({
              isLoggedIn: true,
              id:user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            });
            return;
          }
          //wrong password
          else {
            res.json({
              success: false,
              message: "Invalid password",
            });
            return;
          }
        });
        // email/phone not even finded
      } else {
        res.json({
          success: false,
          message: "Your Email/Phone doesn't exists",
        });
      }
    });
});

module.exports = router