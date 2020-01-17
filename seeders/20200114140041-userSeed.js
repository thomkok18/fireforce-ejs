'use strict';
const passwordHash = require('password-hash');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstname: 'Thom',
        roleId: 1,
        inserts: '',
        lastname: 'Kok',
        email: 'thomkok13@hotmail.com',
        tel: '0612345678',
        pincode: passwordHash.generate('testen13'),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
