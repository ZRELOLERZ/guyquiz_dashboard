const tableNames = require('../../constants/tableNames');
const { db } = require('../../constants/dbConnection');

const funcGetAllChoiceImage = async () => {
  return db(tableNames.choiceImage)
    .select('*')
    .then((res) => {
      return res;
    });
};

module.exports = {
  funcGetAllChoiceImage
};
