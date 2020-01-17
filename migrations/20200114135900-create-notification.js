'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'locations',
          key: 'id'
        }
      },
      what: {
        type: Sequelize.STRING
      },
      where: {
        type: Sequelize.STRING
      },
      who: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      place: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Notifications');
  }
};