import React from 'react';

const ArticlePage = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image || placeholder} alt={article.title} />
      <p>{article.description}</p>
      <p>
        Source: {article.source.name}, Published At: {article.publishedAt}
      </p>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default ArticlePage;
