'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Tasks', [
      {
        title: 'Buy Groceries',
        text: 'Milk, Bread, Eggs',
        user_id: 1
      },
      {
        title: 'Finish Project',
        text: 'Complete Sequelize mock data task',
        user_id: 1
      },
      {
        title: 'Workout',
        text: 'Go to the gym for 1 hour',
        user_id: 2
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Tasks', null, {});

  }
};
