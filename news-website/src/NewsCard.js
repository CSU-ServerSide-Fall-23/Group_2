import React from 'react';
import placeholder from './assets/images/news-placeholder.jpg';

const NewsCard = ({ article }) => {
  return (
    <div className="card text-bg-dark" key={article.url}>
        <a href={article.url} target="_blank" rel="noreferrer" className="text-decoration-none text-reset">
          <img src={article.image || placeholder} className="card-img" alt={article.title || "Untitled"} />
          <div className="card-img-overlay d-flex align-items-end justify-content-start gap-3">
            <p className="card-title m-0">{article.source.name ? `${article.source.name.substring(0, 10)}...` : 'Untitled'}</p>
            <p className="card-text">{article.publishedAt ? article.publishedAt.substring(0, 10) : ''}</p>
          </div>
        </a>
    </div>
  );
};

export default NewsCard;
