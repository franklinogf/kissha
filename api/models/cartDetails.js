/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartDetails', {
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
    'status': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "null"
    },
    'idCart': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'carts',
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
    },
    'createdAt': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    },
    'updatedAt': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "null"
    }
  }, {
    tableName: 'cartDetails'
  });
};
