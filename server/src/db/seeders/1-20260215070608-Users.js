'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'test1',
        email: 'test1@mail.com',
        password: 'tesjkdfst1'
      },
      {
        name: 'example',
        email: 'example@mail.com',
        password: 'esfdxa25mp#$le'
      },
      {
        name: 'user1',
        email: 'user1@mail.com',
        password: 'tuseGJ123r'
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
