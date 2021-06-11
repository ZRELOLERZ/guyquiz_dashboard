const { Knex } = require('knex');
const tableNames = require('../../src/constants/tableNames.js');

/**
 *
 * @param {Knex} knex
 */

exports.up = async function (knex) {
  await Promise.all([
    knex.schema.createTable(tableNames.multipleChoiceTypeQuestion, (table) => {
      table.increments('ID');
      table.timestamp('dateCreated').defaultTo(knex.fn.now(6));
      table.timestamp('dateModified').defaultTo(knex.fn.now(6));
      table.string('questionText');
      table.string('questionTextHasImage');
    }),
    knex.schema.createTable(tableNames.choice, (table) => {
      table.increments('ID');
      table.timestamp('dateCreated').defaultTo(knex.fn.now(6));
      table.timestamp('dateModified').defaultTo(knex.fn.now(6));
      table.string('questionPosition');
      table.boolean('choiceHasImage');
      table.string('choiceText');
      table
        .integer('multipleChoiceTypeQuestionReferenceID')
        .references('ID')
        .inTable(tableNames.multipleChoiceTypeQuestion)
        .onDelete('CASCADE');
    }),
    knex.schema.createTable(tableNames.choiceImage, (table) => {
      table.increments('ID');
      table.timestamp('dateCreated').defaultTo(knex.fn.now(6));
      table.timestamp('dateModified').defaultTo(knex.fn.now(6));
      table.string('imageName');
      table.boolean('hasCaption');
      table.string('imageCaption');
      table
        .integer('choiceReferenceID')
        .references('ID')
        .inTable(tableNames.choice)
        .onDelete('CASCADE');
    }),
    knex.schema.createTable(tableNames.essayTypeQuestion, (table) => {
      table.increments('ID');
      table.timestamp('dateCreated').defaultTo(knex.fn.now(6));
      table.timestamp('dateModified').defaultTo(knex.fn.now(6));
      table.string('questionText');
      table.boolean('questionTextHasImage');
      table.string('answerText');
      table.boolean('answerTextHasImage');
    }),
    knex.schema.createTable(tableNames.essayTypeQuestionImage, (table) => {
      table.increments('ID');
      table.timestamp('dateCreated').defaultTo(knex.fn.now(6));
      table.timestamp('dateModified').defaultTo(knex.fn.now(6));
      table.string('imageType');
      table.string('imageName');
      table.boolean('hasCaption');
      table.string('imageCaption');
      table
        .integer('essayTypeQuestionReferenceID')
        .references('ID')
        .inTable(tableNames.essayTypeQuestionImage)
        .onDelete('CASCADE');
    })
  ]);
};

exports.down = async function (knex) {
  await Promise.all(
    [
      tableNames.choiceImage,
      tableNames.choice,
      tableNames.multipleChoiceTypeQuestion,
      tableNames.essayTypeQuestionImage,
      tableNames.essayTypeQuestion
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
