const tableNames = require('../../constants/tableNames');
const { db } = require('../../constants/dbConnection');

const funcGetChoiceImageByID = async (ID) => {
  return db(tableNames.choiceImage)
    .where('ID', ID)
    .then((res) => {
      return res[0];
    });
};

module.exports = {
  funcGetChoiceImageByID
};
