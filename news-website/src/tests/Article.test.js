import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from '../components/Article';

const sampleArticle = {
  title: 'Sample Article',
  image: 'sample-image.jpg',
  description: 'This is a sample article description.',
  source: { name: 'Sample Source' },
  publishedAt: '2023-12-01T12:34:56Z',
  url: 'https://www.example.com/sample-article',
};

test('renders Article component', () => {
  render(<Article article={sampleArticle} />);

  expect(screen.getByText(sampleArticle.title)).toBeInTheDocument();
  expect(screen.getByAltText(sampleArticle.title)).toHaveAttribute('src', sampleArticle.image);
  expect(screen.getByText(sampleArticle.description)).toBeInTheDocument();
  expect(screen.getByText(`Source: ${sampleArticle.source.name}, Published At: ${sampleArticle.publishedAt}`)).toBeInTheDocument();
  expect(screen.getByText('Read more')).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute('href', sampleArticle.url);
});
