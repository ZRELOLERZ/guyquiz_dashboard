import React from 'react';
import PageButtonSingle from './PageButtonSingle';
import NewQuestionButton from './NewQuestionButton';

function PageButtons() {
  const buttonNames = ['Multiple Choice Type Question', 'Essay Type Question'];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          {buttonNames.map((buttonName, index) => (
            <PageButtonSingle key={index.toString()} buttonName={buttonName} />
          ))}
        </div>
        <NewQuestionButton />
      </div>
    </div>
  );
}

export default PageButtons;
