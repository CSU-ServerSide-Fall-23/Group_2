// src/components/Category/Category.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = ({ categoryName, categoryDescription, apiKey }) => {
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    // Fetch category-specific data from the API
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/category/${categoryName}?apiKey=${apiKey}`
        );

        setCategoryData(response.data);
      } catch (error) {
        console.error(`Error fetching ${categoryName} data:`, error);
      }
    };

    fetchCategoryData();
  }, [categoryName, apiKey]);

  return (
    <div className="category">
      <h2>{categoryName}</h2>
      <p>{categoryDescription}</p>
      {categoryData && (
        <div>
          <h3>{categoryData.title}</h3>
          <p>{categoryData.content}</p>
          {/* Add more content or features related to the category as needed */}
        </div>
      )}
    </div>
  );
};

export default Category;


