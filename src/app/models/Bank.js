'use strict'
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {})
  Bank.associate = function (models) {
    // associations can be defined here
  }
  return Bank
}
