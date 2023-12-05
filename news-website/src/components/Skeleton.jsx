import React, { useState, useEffect } from 'react';

const LoadingSkeleton = () => (
  <div className="loading-skeleton">
    <div className="loading-skeleton-row"></div>
    <div className="loading-skeleton-row"></div>
    <div className="loading-skeleton-row"></div>
  </div>
);

const fetchData = () => {
  // Simulate an asynchronous operation (e.g., data fetching) with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000);
  });
};

const SkeleLoader = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        // Set loading to true while fetching data
        setLoading(true);
        // Simulate data fetching
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false after data is fetched (or in case of an error)
        setLoading(false);
      }
    };

    fetchDataAndHandleLoading();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div>
          {/* Actual content goes here */}
        </div>
      )}
    </div>
  );
};

export default SkeleLoader;