const tableNames = require('../../constants/tableNames');
const { db } = require('../../constants/dbConnection');

const funcGetChoiceByID = async (ID) => {
  return db(tableNames.choice)
    .where('ID', ID)
    .then((res) => {
      return res[0];
    });
};

module.exports = {
  funcGetChoiceByID
};
