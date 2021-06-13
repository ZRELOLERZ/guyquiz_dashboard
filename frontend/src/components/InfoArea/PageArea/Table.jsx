import React from 'react';
import { DeleteIcon, EditIcon } from '../../../assets/Icons';

function Table({ data }) {
  const headers = [
    'ID',
    'DATE CREATED',
    'DATE MODIFIED',
    'QUESTION YEAR',
    'QUESTION TYPE',
    ''
  ];
  const buttonStyle = 'fill-current text-pink-200';
  return (
    <div>
      <table className="w-full">
        <thead className="w-full bg-lightGray border-b-4 rounded-b-lg border-lightPink">
          <tr>
            {headers.map((e) => (
              <th key={e.toString()} className="text-gray-400 font-medium h-12">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((questionObject, index) => (
            <tr
              key={index.toString()}
              className="text-gray-200 font-light leading-10"
            >
              <td className="text-center">{questionObject.ID}</td>
              <td className="text-center">{questionObject.dateCreated}</td>
              <td className="text-center">{questionObject.dateModified}</td>
              <td className="text-center">{questionObject.questionYear}</td>
              <td className="text-center">{questionObject.questionType}</td>
              <td>
                <button type="button" className="mx-1">
                  <EditIcon className="fill-current text-lightYellow" />
                </button>
                <button type="button" className="mx-1">
                  <DeleteIcon className="fill-current text-lightRed" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
