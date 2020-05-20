/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'cardOwner': {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "null"
    },
    'cardNumber': {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "null"
    },
    'cardDate': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'paymentType': {
      type: DataTypes.STRING(100),
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
    'idAddress': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'address',
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
    tableName: 'payments'
  });
};
