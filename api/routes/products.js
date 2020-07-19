const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Properties } = require("../helpers/functions");
const table = require("../models/products");
const categories = require("../models/categories");

categories.hasMany(table);
table.belongsTo(categories);

router.get("/", (req, res) => {
  //filters
  const requestedCategory = req.query.category;
  const requestedMinPrice = req.query.minPrice;
  const requestedMaxPrice = req.query.maxPrice;
  const requestedBrand = req.query.brand;
  const requestedLimit = req.query.limit || 0;
  const requestedPage = req.query.page;
  const requestedSort = req.query.sort;

  //set the search properties
  const properties = {
    include: {
      model: categories,
    },
  };

  //set where conditionals
  if (requestedBrand) {
    properties.where = {
      brand: requestedBrand,
    };
  }
  if (requestedLimit) {
    properties.limit = Number(requestedLimit);
  }
  if (requestedPage) {
    properties.offset = (Number(requestedPage) - 1) * Number(requestedLimit);
  }
  if (requestedMinPrice) {
    properties.where = {
      ...properties.where,
      price: {
        [Op.gte]: requestedMinPrice,
      },
    };
  }
  if (requestedMaxPrice) {
    properties.where = {
      ...properties.where,
      price: {
        [Op.lte]: requestedMaxPrice,
      },
    };
  }
  if (requestedCategory) {
    properties.include.where = { name: requestedCategory };
  }

  if (requestedSort) {
    console.log(requestedSort);
    let tempColumn = "";
    let tempTypeOfSort = "";

    if (requestedSort === "Oldest-First") {
      tempColumn = "createdAt";
      tempTypeOfSort = "ASC";
    }
    if (requestedSort === "Newest-First") {
      tempColumn = "createdAt";
      tempTypeOfSort = "DESC";
    }
    if (requestedSort === "Price:-Low-to-High") {
      tempColumn = "price";
      tempTypeOfSort = "ASC";
    }
    if (requestedSort === "Price:-High-to-Low") {
      tempColumn = "price";
      tempTypeOfSort = "DESC";
    }
    if (requestedSort === "Name:-A-Z") {
      tempColumn = "name";
      tempTypeOfSort = "ASC";
    }
    if (requestedSort === "Name:-Z-A") {
      tempColumn = "name";
      tempTypeOfSort = "DESC";
    }

    properties.order = [
      // Will escape title and validate DESC against a list of valid direction parameters
      [tempColumn, tempTypeOfSort],
    ];
  }
  table.findAndCountAll(properties).then((data) => {
    if (data !== null) {
      const page =
        Number(requestedLimit) !== 0
          ? Number(requestedPage)
            ? Number(requestedPage)
            : 1
          : 1;
      const limit = Number(requestedLimit) || data.count;
      const totalPages = data.length / limit;

      res.json({
        status: true,
        message: "Ok",
        totalPages: Math.ceil(data.count / limit),
        currentPage: page,
        data: data.rows,
      });
    } else {
      res.json({
        status: false,
        message: `No data found`,
      });
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  table
    .findOne({
      include: categories,
      where: { id },
    })
    .then((data) => {
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

router.get("/:id/category", (req, res) => {
  const { id } = req.params;
  addresses
    .findAll({
      where: { id },
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

router.post("/", (req, res) => {
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
      console.log("err: ", err);
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
