const tableNames = require('../../constants/tableNames');
const { db } = require('../../constants/dbConnection');

const funcGetAllMultipleChoiceTypeQuestion = async () => {
  return await db(tableNames.multipleChoiceTypeQuestion)
    .select('*')
    .then(async (multipleChoiceTypeQuestionPromise) => {
      const finalMultipleChoiceTypeQuestionCollection = [];
      await Promise.all(
        multipleChoiceTypeQuestionPromise.map(
          async (multipleChoiceTypeQuestionObject) => {
            const choiceReferenceObject = await getChoiceReferenceObject(
              multipleChoiceTypeQuestionObject
            );
            multipleChoiceTypeQuestionObject['choices'] = choiceReferenceObject;
            finalMultipleChoiceTypeQuestionCollection.push(
              multipleChoiceTypeQuestionObject
            );
          }
        )
      );
      return finalMultipleChoiceTypeQuestionCollection;
    });
};

const getChoiceReferenceObject = async (multipleChoiceTypeQuestionObject) => {
  return await db
    .where(
      'multipleChoiceTypeQuestionReferenceID',
      multipleChoiceTypeQuestionObject.ID
    )
    .from(tableNames.choice)
    .then(async (choicePromise) => {
      const finalChoiceCollection = [];
      await Promise.all(
        choicePromise.map(async (choiceObject) => {
          const choiceImageReferenceObject =
            await getChoiceImageReferenceObject(choiceObject);
          choiceObject['choiceImage'] = choiceImageReferenceObject;
          finalChoiceCollection.push(choiceObject);
        })
      );
      return finalChoiceCollection;
    });
};

const getChoiceImageReferenceObject = async (choiceObject) => {
  return await db
    .where('choiceReferenceID', choiceObject.ID)
    .from(tableNames.choiceImage)
    .then((obj) => {
      return obj[0];
    });
};

module.exports = {
  funcGetAllMultipleChoiceTypeQuestion
};
