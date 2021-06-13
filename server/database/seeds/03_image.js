const tableNames = require('../../src/constants/tableNames');
const { Knex } = require('knex');

/**
 *
 * @param {Knex} knex
 * @returns
 */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(tableNames.choiceImage)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.choiceImage).insert([
        {
          imageName: 'question1a',
          imageCaption: 'I am question1a',
          choiceReferenceID: 1
        },
        {
          imageName: 'question1b',
          imageCaption: 'I am question1b',
          choiceReferenceID: 2
        },
        {
          imageName: 'question1c',
          imageCaption: 'I am question1c',
          choiceReferenceID: 3
        },
        {
          imageName: 'question2a',
          imageCaption: 'I am question2a',
          choiceReferenceID: 4
        }
      ]);
    });
};
