import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <img src={article.image || placeholder} alt={article.title} />
      <p>{article.description}</p>
      <p>
        Source: {article.source.name}, Published At: {article.publishedAt}
      </p>
      <Link to={`/article/${encodeURIComponent(article.title)}`}>
        <p className="redirect-link">Click to read more</p>
      </Link>
    </div>
  );
};

export default Article;
