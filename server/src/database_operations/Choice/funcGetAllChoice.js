const tableNames = require('../../constants/tableNames');
const { db } = require('../../constants/dbConnection');

const funcGetAllChoice = async () => {
  return db(tableNames.choice)
    .select('*')
    .then((res) => {
      return res;
    });
};

module.exports = {
  funcGetAllChoice
};
