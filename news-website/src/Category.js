import React from 'react';

const Category = ({ name, onClick }) => {
  return (
    <li className="nav-item">
      <a className="nav-link text-white" href="#" onClick={() => onClick(name)}>
        {name}
      </a>
    </li>
  );
};

export default React.memo(Category);
