const tableNames = require('../../src/constants/tableNames');
const { Knex } = require('knex');

/**
 *
 * @param {Knex} knex
 * @returns
 */

exports.seed = function (knex) {
  return knex(tableNames.multipleChoiceTypeQuestion).then(function () {
    return knex(tableNames.multipleChoiceTypeQuestion).insert([
      { questionText: 'What is 2 + 2?' },
      { questionText: 'What is 2 + 10?' },
      { questionText: 'What is 20 + 32?' }
    ]);
  });
};
