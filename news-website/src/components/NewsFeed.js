import React from 'react';

const NewsFeed = ({ newsItems }) => {
  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <ul>
        {newsItems.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
