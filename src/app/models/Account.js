'use strict'
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: DataTypes.STRING
  }, {})
  Account.associate = function (models) {
    // associations can be defined here
  }
  return Account
}
