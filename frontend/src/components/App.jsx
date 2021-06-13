import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Logo from './Logo';
import InfoArea from './InfoArea';
import {
  ALL_MULTIPLE_CHOICE_TYPE_QUESTION,
  ALL_ESSAY_TYPE_QUESTION
} from './schemas';

function App() {
  const allMultipleChoiceTypeQuestionQuery = useQuery(
    ALL_MULTIPLE_CHOICE_TYPE_QUESTION
  );

  const allMultipleChoiceTypeQuestionQueryData =
    allMultipleChoiceTypeQuestionQuery.data;

  const allMultipleChoiceTypeQuestionQueryDataLoading =
    allMultipleChoiceTypeQuestionQuery.loading;

  const [
    allMultipleChoiceTypeQuestionData,
    setAllMultipleChoiceTypeQuestionData
  ] = useState([{}]);

  const allEssayTypeQuestionQuery = useQuery(ALL_ESSAY_TYPE_QUESTION);

  const allEssayTypeQuestionQueryData = allEssayTypeQuestionQuery.data;

  const allEssayTypeQuestionQueryDataLoading =
    allMultipleChoiceTypeQuestionQuery.loading;

  const [allEssayTypeQuestionData, setAllEssayTypeQuestionData] = useState([
    {}
  ]);

  useEffect(() => {
    if (
      !allMultipleChoiceTypeQuestionQueryDataLoading &&
      allMultipleChoiceTypeQuestionQueryData.getAllMultipleChoiceTypeQuestion
    ) {
      setAllMultipleChoiceTypeQuestionData(
        allMultipleChoiceTypeQuestionQueryData.getAllMultipleChoiceTypeQuestion
      );
    }
  });

  useEffect(() => {
    if (
      !allEssayTypeQuestionQueryDataLoading &&
      allEssayTypeQuestionQueryData.getAllEssayTypeQuestion
    ) {
      setAllEssayTypeQuestionData(
        allEssayTypeQuestionQueryData.getAllEssayTypeQuestion
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
