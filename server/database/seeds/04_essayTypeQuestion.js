const tableNames = require('../../src/constants/tableNames');
const { Knex } = require('knex');

/**
 *
 * @param {Knex} knex
 * @returns
 */

exports.seed = function (knex) {
  return knex(tableNames.essayTypeQuestion).then(function () {
    return knex(tableNames.essayTypeQuestion).insert([
      {
        questionText: 'Which continent is Guyana located on?',
        questionYear: 2021,
        questionType: 'miscellaneous'
      },
      {
        questionText: "What is the name of Guyana's president?",
        questionYear: 2020,
        questionType: 'miscellaneous'
      },
      {
        questionText: 'What does the colors green and blue make?',
        questionYear: 2021,
        questionType: 'miscellaneous'
      }
    ]);
  });
};
