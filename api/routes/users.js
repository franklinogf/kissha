const express = require("express");
const router = express.Router();
const { Properties } = require("../helpers/functions");
const table = require("../models/users");
const addresses = require("../models/address");
const bcrypt = require("bcrypt");

table.hasMany(addresses);
addresses.belongsTo(table);

router.get("/", (req, res) => {
  table
    .findAll({
      include: addresses,
    })
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: true,
          message: "Ok",
          data: data,
        });
      } else {
        res.json({
          status: false,
          message: `No data found`,
        });
      }
    });
});

router.get("/:id/:limited?", (req, res) => {
  const { id } = req.params;

  //object constructor
  let queryProperties = {
    include: addresses,
    where: { id },
  };

  //limited query?
  if (req.params.limited) {
    queryProperties.attributes = [
      "id",
      "firstName",
      "lastName",
      "email",
      "phone",
      "lastVisit",
    ];
  }

  table.findOne(queryProperties).then((data) => {
    if (data !== null) {
      res.json({
        status: true,
        message: "Ok",
        data: data,
      });
    } else {
      res.json({
        status: false,
        message: `No data found`,
      });
    }
  });
});

router.get("/:id/address", (req, res) => {
  const { id } = req.params;
  addresses
    .findAll({
      where: { userId: id },
    })
    .then((data) => {
      if (data.length > 0) {
        res.json({
          status: true,
          message: "Ok",
          data: data,
        });
      } else {
        res.json({
          status: false,
          message: `No data found`,
        });
      }
    });
});

router.post("/:id/address", (req, res) => {
  const { id } = req.params;
  const data = Properties(req.body);
  addresses
    .create({ ...data, userId: id })
    .then((data) => {
      res.json({
        status: true,
        message: "Ok",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        message: `No data found`,
      });
    });
});

router.post("/", (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 9);
  const data = Properties(req.body);
  table
    .create(data)
    .then((data) => {
      res.json({
        status: true,
        message: "created",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        message: "No created",
      });
    });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const data = Properties(req.body);
  table
    .update(data, {
      where: { id },
    })
    .then((err) => {
      if (err == 1) {
        res.json({
          status: true,
          message: "Updated",
        });
      } else {
        res.json({
          status: false,
          message: "No updated",
        });
      }
    });
});

router.patch("/:id/password", (req, res) => {
  const { id } = req.params;
  //compare old password with DB
  table
    .findAll({
      where: { id },
    })
    .then((data) => {
      bcrypt.compare(
        req.body.oldPassword,
        data[0].dataValues.password,
        (bcryptErr, verified) => {
          if (verified) {
            const newPassword = bcrypt.hashSync(req.body.newPassword, 9);
            table
              .update(
                { password: newPassword },
                {
                  where: { id },
                }
              )
              .then((err) => {
                if (err == 1) {
                  res.json({
                    status: true,
                    message: "Updated",
                  });
                } else {
                  res.json({
                    status: false,
                    message: "No updated",
                  });
                }
              });
          } else {
            res.json({
              status: false,
              message: "No updated, wrong old password",
            });
          }
        }
      );
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  table
    .delete({
      where: { id },
    })
    .then((err) => {
      if (err == 1) {
        res.json({
          status: true,
          message: "Deleted",
        });
      } else {
        res.json({
          status: false,
          message: "No deleted",
        });
      }
    });
});

module.exports = router;
