import React from 'react';
import NewsCard from './NewsCard';

const NewsFeed = ({ articles }) => {
  return (
    <div className="d-flex flex-column flex-grow-1 gap-4 gap-xl-3 my-4 px-md-3 mx-auto mx-xl-5">
      <h1 className="text-md-start text-white fw-bolder text-uppercase text-sm-center m-0">News Feed</h1>
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsFeed;
