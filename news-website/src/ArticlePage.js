import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = ({ articles }) => {
  const { title } = useParams();
  const article = articles.find((article) => encodeURIComponent(article.title) === title);

  if (!article) {
    return <div>Article not found</div>;
  }

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
