import React from 'react';
import { useParams } from 'react-router-dom';

const Article = ({ article }) => {
  const history = useHistory();

  const redirectToArticle = () => {
    // Use React Router to navigate to the article page
    history.push(`/article/${encodeURIComponent(article.title)}`);
  };

  return (
    <div className="article" onClick={redirectToArticle}>
      <h2>{article.title}</h2>
      <img src={article.image || placeholder} alt={article.title} />
      <p>{article.description}</p>
      <p>
        Source: {article.source.name}, Published At: {article.publishedAt}
      </p>
      <p className="redirect-link">Click to read more</p>
    </div>
  );
};

export default Article;
