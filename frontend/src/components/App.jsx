import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Logo from './Logo';
import InfoArea from './InfoArea';
import { ALL_MULTIPLE_CHOICE_TYPE_QUESTION } from './schemas';

function App() {
  const allMultipleChoiceTypeQuestionQuery = useQuery(
    ALL_MULTIPLE_CHOICE_TYPE_QUESTION
  );

  const allMultipleChoiceTypeQuestionQueryData =
    allMultipleChoiceTypeQuestionQuery.data;

  const allMultipleChoiceTypeQuestionQueryDataLoading =
    allMultipleChoiceTypeQuestionQuery.loading;

  const [allMultipleChoiceTypeQuestionData, setAllMultipleChoiceTypeQuestion] =
    useState([{}]);

  useEffect(() => {
    if (
      !allMultipleChoiceTypeQuestionQueryDataLoading &&
      allMultipleChoiceTypeQuestionQueryData.getAllMultipleChoiceTypeQuestion
    ) {
      setAllMultipleChoiceTypeQuestion(
        allMultipleChoiceTypeQuestionQueryData.getAllMultipleChoiceTypeQuestion
      );
    }
  });
  return (
    <div className="container h-screen mx-auto bg-darkGray p-5 font-sans">
      <Logo />
      <InfoArea data={allMultipleChoiceTypeQuestionData} />
    </div>
  );
}

export default App;
