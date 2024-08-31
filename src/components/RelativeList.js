import React from 'react';

const RelativeList = () => {
  const relatives = ['Uncle', 'Aunt', 'Cousin', 'Grandparents', 'Siblings'];

  return (
    <ol key="relativeList">
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`}>{relative}</li>
      ))}
    </ol>
  );
};

export default RelativeList;
