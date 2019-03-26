'use strict'
module.exports = (sequelize, DataTypes) => {
  const AccountType = sequelize.define('AccountType', {
    name: DataTypes.STRING
  }, {})
  AccountType.associate = function (models) {
    // associations can be defined here
  }
  return AccountType
}
