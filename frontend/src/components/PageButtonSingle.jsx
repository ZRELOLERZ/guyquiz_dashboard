import React from 'react';

function PageButtonSingle({ buttonName }) {
  return (
    <div className="mr-4">
      <button
        type="button"
        className="p-3 bg-lightBlue rounded-t-2xl font-semibold"
      >
        {buttonName}
      </button>
    </div>
  );
}

export default PageButtonSingle;
