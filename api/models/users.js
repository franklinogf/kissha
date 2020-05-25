const DataTypes = require('sequelize')
const mysql = require('../database')

module.exports = mysql.define('users', {
  'id': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'firstName': {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: "null"
  },
  'lastName': {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: "null"
  },
  'password': {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: "null"
  },
  'email': {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: "null"
  },
  'phone': {
    type: DataTypes.STRING(11),
    allowNull: true,
    comment: "null"
  },
  'lastVisit': {
    type: DataTypes.DATE,
    allowNull: true,
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
  tableName: 'users'
})