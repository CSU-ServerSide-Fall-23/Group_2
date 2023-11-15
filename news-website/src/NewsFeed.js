import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFeed = ({ apiKey }) => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    // Fetch news data from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );

        setNewsData(response.data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <ul>
        {newsData &&
          newsData.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NewsFeed;

