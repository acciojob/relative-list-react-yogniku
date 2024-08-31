import React from 'react';

const RelativeList = () => {
  const relatives = [
    { key: 'relativeListItem1', name: 'Amit Uncle' },
    {key:'RelativeListItem1',name:'Aunt' },
    {key:'RelativeListItem1' ,name:'Cousin'},
     {key:'RelativeListItem1' ,name:'Grandparents'},
     {key:'RelativeListItem1',name:'Siblings'}
    ];

  return (
    <ol  id="relativeList">
      {relatives.map((relative) => (
       <li key={relative.key} id={relative.key}>
 {relative.name}
 </li>
      ))}
    </ol>
  );
};

export default RelativeList;
