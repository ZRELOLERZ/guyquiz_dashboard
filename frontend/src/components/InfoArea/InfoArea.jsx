import React from 'react';
import PageButtons from './PageButtons/PageButtons';
import PageArea from './PageArea/PageArea';

function InfoArea({ data }) {
  return (
    <div className="mt-10">
      <PageButtons />
      <PageArea data={data} />
    </div>
  );
}

export default InfoArea;
