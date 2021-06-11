const tableNames = require('../../src/constants/tableNames');
const { Knex } = require('knex');

/**
 *
 * @param {Knex} knex
 * @returns
 */
exports.seed = function (knex) {
  return knex(tableNames.choice).then(function () {
    return knex(tableNames.choice).insert([
      {
        questionPosition: 'a',
        choiceText: '10',
        multipleChoiceTypeQuestionReferenceID: 1
      },
      {
        questionPosition: 'b',
        choiceText: '20',
        multipleChoiceTypeQuestionReferenceID: 1
      },
      {
        questionPosition: 'c',
        choiceText: '4',
        multipleChoiceTypeQuestionReferenceID: 1
      },
      {
        questionPosition: 'a',
        choiceText: '12',
        multipleChoiceTypeQuestionReferenceID: 2
      },
      {
        questionPosition: 'b',
        choiceText: '20',
        multipleChoiceTypeQuestionReferenceID: 2
      },
      {
        questionPosition: 'c',
        choiceText: '42',
        multipleChoiceTypeQuestionReferenceID: 2
      },
      {
        questionPosition: 'a',
        choiceText: '112',
        multipleChoiceTypeQuestionReferenceID: 3
      },
      {
        questionPosition: 'b',
        choiceText: '52',
        multipleChoiceTypeQuestionReferenceID: 3
      },
      {
        questionPosition: 'c',
        choiceText: '48',
        multipleChoiceTypeQuestionReferenceID: 3
      }
    ]);
  });
};
