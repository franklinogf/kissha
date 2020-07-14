const DataTypes = require('sequelize');
const mysql = require('../database');

module.exports = mysql.define('addresses', {
  'id': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'fullName': {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "null"
  },
  'street': {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "null"
  },
  'apartment': {
    type: DataTypes.STRING(25),
    allowNull: true,
    comment: "null"
  },
  'city': {
    type: DataTypes.STRING(50),
    allowNull: true,
    comment: "null"
  },
  'state': {
    type: DataTypes.STRING(50),
    allowNull: true,
    comment: "null"
  },
  'country': {
    type: DataTypes.STRING(50),
    allowNull: true,
    comment: "null"
  },
  'type': {
    type: DataTypes.ENUM('billing', 'shipping'),
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
  },
  'userId': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    comment: "null",
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, {
  tableName: 'addresses'
});


