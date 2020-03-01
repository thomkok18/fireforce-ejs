'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    what: DataTypes.STRING,
    location: DataTypes.STRING,
    who: DataTypes.STRING,
    tel: DataTypes.STRING,
    locationId: DataTypes.INTEGER
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsTo(models.Location);
  };
  return Notification;
};