const express = require("express");
const router = express.Router();
const { Properties } = require("../helpers/functions");
const table = require("../models/orders");
const orderDetails = require("../models/orderDetails");
const products = require('../models/products')

table.belongsToMany(products, { through: orderDetails });
products.belongsToMany(table, { through: orderDetails });

router.get("/:id", (req, res) => {
  
    const { id } = req.params;
  
    //object constructor
    let queryProperties = {
      include: products,
      where: { idUser:id },
    };

    table.findAll(queryProperties).then((data) => {
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

  module.exports = router;