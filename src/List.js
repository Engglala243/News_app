import React from 'react';

const List = ({ items }) => {
  let colors = [
    { name: 'Red'},
    { name: 'Green'},
    { name: 'Blue'},
    { name: 'Pink'},
    { name: 'Yellow'},
  ];

  return (
    <ul>
      {items.map((item, index) => {
        let color = colors[index % colors.length];
        return (
          <li key={index}>
            {item} - {color.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;