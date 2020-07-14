const express = require("express");
const router = express.Router();
const passport = require('passport');


router.post("/login",passport.authenticate('local',{
  
}),(req,res)=>{
  res.json({
    status:true,
  })
});

router.get('/isLogged', (req, res, next) => {

       if (req.isAuthenticated()) {
        const userResponse = {
          id:req.user.id,
          firstName:req.user.firstName,
          lastName:req.user.lastName,
          email:req.user.email,
          phone:req.user.phone,
          lastVisit:req.user.lastVisit
        }

        res.json({
          status: true,
          message: "Ok",
          data: userResponse
  
        });
    } else {
      res.json({
        status: false,
        message: `Client is not logged to get this data`,
      });
    }

});

router.get('/logout', (req, res, next) => {
  req.session.destroy(function (err) {
    if (!err) {
        res.status(200).clearCookie('connect.sid', {path: '/'}).json({status: true});
    } else {
        console.log(err)
    }

  })
});

module.exports = router