/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderDetails', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
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
    'idOrder': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    'idProduct': {
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
  });
};
