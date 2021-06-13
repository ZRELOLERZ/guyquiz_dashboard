import React from 'react';
import useStore from '../../../store/store';

function PageButtonSingle({ buttonName, index }) {
  const setSelectedPageIndex = useStore((state) => state.setSelectedPageIndex);
  const selectedPageIndex = useStore((state) => state.selectedPageIndex);
  const selectedStyle = 'p-3 bg-lightBlue rounded-t-2xl font-semibold';
  const notSelectedStyle =
    'p-3 bg-lightBlue opacity-50 rounded-t-2xl font-semibold';
  const buttonStyle =
    selectedPageIndex === index ? selectedStyle : notSelectedStyle;
  return (
    <div className="mr-4">
      <button
        type="button"
        className={buttonStyle}
        onClick={() => {
          setSelectedPageIndex(index);
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}

export default PageButtonSingle;
