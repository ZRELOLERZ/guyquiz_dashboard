import React from 'react';
import Table from './Table';

function PageArea({ data }) {
  return (
    <div className="border-gray-500 border py-5 rounded-b-lg">
      <Table data={data} />
    </div>
  );
}

export default PageArea;
