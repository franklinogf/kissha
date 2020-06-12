const express = require("express");
const router = express.Router();
const table = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  //Extract
  let { email, phone, password } = req.body;
  console.log(email);
  console.log(password);
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
      where:  { email }
    })
    .then((data) => {
        console.log(`data: ${data}`);
      //get the data, now test the password
      if (data !== null && data.length > 0) {
        //bycrypt compare
        bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {
          // time to login
          if (verified) {
            req.session.userID = data[0].id;
            res.json({
              success: true,
              first: data[0].firstName,
              lastName: data[0].lastName,
              email: data[0].email,
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

router.post("/logout", (req, res) => {
  // session exists
  if (req.session.userID) {
    //destroy
    req.session.destroy();
    res.json({
      success: true,
    });
    return true;
  } else {
    res.json({
      success: false,
    });
    return false;
  }
});

router.post("/isLoggedIn", (req, res) => {
  const id = eq.session.userID;
  if (id) {
    table
      .findOne({
        where: { id },
      })
      .then((data) => {
        //session and user found
        if (data !== null) {
          res.json({
            success: true,
            first: data[0].firstName,
            lastName: data[0].lastName,
            email: data[0].email,
          });
          return true;

          // session ok but not found in DB
        } else {
          res.json({
            success: false,
          });
        }
      });
  }
  //no session found
  else {
    res.json({
      success: false,
    });
  }
});

module.exports = router