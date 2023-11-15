import React from 'react';

const Category = ({ categoryName, categoryDescription }) => {
  return (
    <div className="category">
      <h2>{categoryName}</h2>
      <p>{categoryDescription}</p>
    </div>
  );
};

export default Category;

