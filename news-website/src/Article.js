import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <img src={article.image || placeholder} alt={article.title} />
      <p>{article.description}</p>
      <p>
        Source: {article.source.name}, Published At: {article.publishedAt}
      </p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default Article;
