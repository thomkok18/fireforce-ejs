'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('locations', [
      {
        city: 'Almere',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city: 'Amsterdam',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {});
  }
};
