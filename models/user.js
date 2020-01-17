'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    roleId: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    inserts: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    pincode: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role)
  };
  return User;
};