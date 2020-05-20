/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carts', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
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
    tableName: 'carts'
  });
};
