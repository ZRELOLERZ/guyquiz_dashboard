import { gql } from '@apollo/client';

const ALL_MULTIPLE_CHOICE_TYPE_QUESTION = gql`
  query GetAllMultipleChoiceTypeQuestion {
    getAllMultipleChoiceTypeQuestion {
      ID
      dateCreated
      dateModified
      questionYear
      questionType
      questionAuthor
    }
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { ALL_MULTIPLE_CHOICE_TYPE_QUESTION };
