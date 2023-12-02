import React from 'react';
import NewsCard from './NewsCard';

const NewsFeed = ({ articles }) => {
  return (
    <div className="row gap-4 gap-xl-3 my-4 px-md-3 mx-auto justify-content-center" >
      <h1 className="text-md-start text-white fw-bolder text-uppercase text-sm-center m-0">News Feed</h1>
        {articles.map((article) => (
        <div key={article.url} className="col-lg-3 col-sm-6 col-xs-12">
            <NewsCard article={article} />
        </div>
        ))}
    </div>
  );
};

export default NewsFeed;
