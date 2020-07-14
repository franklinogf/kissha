const DataTypes = require('sequelize');
const mysql = require('../database');
module.exports = mysql.define('orderDetails', {
  'id': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'quantity': {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    comment: "null"
  },
  'price': {
    type: "DOUBLE",
    allowNull: true,
    comment: "null"
  },
  'orderId': {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    comment: "null",
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  'productId': {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    comment: "null",
    references: {
      model: 'products',
      key: 'id'
    }
  }
}, {
  tableName: 'orderDetails'
})