const tableNames = require('../../constants/tableNames');
const { db } = require('../../constants/dbConnection');

const funcGetAllEssayTypeQuestion = async () => {
  return await db(tableNames.essayTypeQuestion)
    .select('*')
    .then(async (essayTypeQuestionPromise) => {
      const finalMultipleChoiceTypeQuestionCollection = [];
      await Promise.all(
        essayTypeQuestionPromise.map(async (essayTypeQuestionObject) => {
          finalMultipleChoiceTypeQuestionCollection.push(
            essayTypeQuestionObject
          );
        })
      );
      return finalMultipleChoiceTypeQuestionCollection;
    });
};

module.exports = {
  funcGetAllEssayTypeQuestion
};
