const DataTypes = require('sequelize');
const mysql = require('../database');

module.exports = mysql.define('carts', {
  'id': {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'idUser': {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    comment: "null",
    references: {
      model: 'users',
      key: 'id'
    }
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
  tableName: 'carts'
})
