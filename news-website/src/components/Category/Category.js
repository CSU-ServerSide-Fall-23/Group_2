// src/components/Category/Category.js
import React from 'react';

const Category = ({ categoryName, categoryDescription }) => {
  return (
    <div className="category">
      <h2>{categoryName}</h2>
      <p>{categoryDescription}</p>
      {/* Add more content or features related to the category as needed */}
    </div>
  );
};

export default Category;
