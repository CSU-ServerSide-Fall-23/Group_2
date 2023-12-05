import React, { useState, useEffect } from 'react';

const LoadingSkeleton = () => (
  <div className="loading-skeleton">
    <div className="loading-skeleton-row"></div>
    <div className="loading-skeleton-row"></div>
    <div className="loading-skeleton-row"></div>
  </div>
);

const fetchData = () => {
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
        setLoading(true);
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndHandleLoading();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div>

        </div>
      )}
    </div>
  );
};

export default SkeleLoader;