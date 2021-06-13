import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Logo from './Logo';
import InfoArea from './InfoArea/InfoArea';
import useStore from '../store/store';
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

  const setAllMultipleChoiceTypeQuestionData = useStore(
    (state) => state.setAllMultipleChoiceTypeQuestionData
  );

  const allEssayTypeQuestionQuery = useQuery(ALL_ESSAY_TYPE_QUESTION);

  const allEssayTypeQuestionQueryData = allEssayTypeQuestionQuery.data;

  const allEssayTypeQuestionQueryDataLoading =
    allEssayTypeQuestionQuery.loading;

  const setAllEssayTypeQuestionData = useStore(
    (state) => state.setAllEssayTypeQuestionData
  );

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

  const selectedPageIndex = useStore((state) => state.selectedPageIndex);
  const infoAreaData = () => {
    if (selectedPageIndex === 0) {
      return useStore((state) => state.allMultipleChoiceTypeQuestionData);
    }
    if (selectedPageIndex === 1) {
      return useStore((state) => state.allEssayTypeQuestionData);
    }
    return null;
  };

  return (
    <div className="container h-screen mx-auto bg-darkGray p-5 font-sans">
      <Logo />
      <InfoArea data={infoAreaData()} />
    </div>
  );
}

export default App;
