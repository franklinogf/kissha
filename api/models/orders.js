/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'subTotal': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'tax': {
      type: "DOUBLE",
      allowNull: true,
      comment: "null"
    },
    'orderNumber': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'orderDate': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
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
    'idPayment': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'payments',
        key: 'id'
      }
    }
  }, {
    tableName: 'orders'
  });
};
