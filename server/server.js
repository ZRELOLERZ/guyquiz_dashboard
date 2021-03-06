const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const express = require('express');

const {
  funcGetAllMultipleChoiceTypeQuestion
} = require('./src/database_operations/multipleChoiceTypeQuestion/funcGetAllMultipleChoiceTypeQuestion');

const {
  funcGetAllEssayTypeQuestion
} = require('./src/database_operations/EssayTypeQuestion/funcGetAllEssayTypeQuestion');

const schema = buildSchema(`
    type MultipleChoiceTypeQuestion {
        ID: ID,
        dateCreated: String,
        dateModified: String,
        questionYear: Int,
        questionType: String,
        questionAuthor: String,
        questionText: String,
        questionTextHasImage: Boolean
        choices: [Choice]
    }

    type Choice {
        ID: ID,
        dateCreated: String,
        dateModified: String,
        questionPosition: String,
        choiceHasImage: Boolean,
        choiceText: String,
        multipleChoiceTypeQuestionReferenceID: Int,
        choiceImage: ChoiceImage
    }

    type ChoiceImage {
        ID: ID,
        dateCreated: String,
        dateModified: String,
        imageName: String,
        hasCaption: String,
        imageCaption: String,
        choiceReferenceID: Int
    }

    type EssayTypeQuestion {
        ID: ID,
        dateCreated: String,
        dateModified: String,
        questionYear: Int,
        questionType: String,
        questionAuthor: String,
        questionText: String,
        questionTextHasImage: Boolean
        answerText: String,
        answerTextHasImage: Boolean
    }

    type Query {
        getAllMultipleChoiceTypeQuestion: [MultipleChoiceTypeQuestion]
        getAllEssayTypeQuestion: [EssayTypeQuestion]
    }
`);

const root = {
  getAllMultipleChoiceTypeQuestion: funcGetAllMultipleChoiceTypeQuestion,
  getAllEssayTypeQuestion: funcGetAllEssayTypeQuestion
};

const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

const PORT = 5000;
app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
