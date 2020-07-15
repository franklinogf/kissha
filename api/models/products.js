const DataTypes = require('sequelize');
const mysql = require('../database');

module.exports = mysql.define('products', {
  'id': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'name': {
    type: DataTypes.STRING(150),
    allowNull: false,
    comment: "null"
  },
  'brand': {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "null"
  },
  'model': {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "null"
  },
  'description': {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: "null"
  },
  'price': {
    type: "DOUBLE",
    allowNull: true,
    comment: "null"
  },
  'stock': {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    comment: "null"
  },
  'discountStatus': {
    type: DataTypes.INTEGER(1),
    allowNull: true,
    comment: "null"
  },
  'discount': {
    type: DataTypes.DECIMAL,
    allowNull: true,
    comment: "null"
  },
  'categoryId': {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    comment: "null",
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  'images': {
    type: DataTypes.STRING(500),
    allowNull: false,
    comment: "null"
  },
  'createdAt': {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: mysql.literal('CURRENT_TIMESTAMP'),
    comment: "null"
  },
  'updatedAt': {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: mysql.literal('CURRENT_TIMESTAMP'),
    comment: "null"
  }
}, {
  tableName: 'products'
})