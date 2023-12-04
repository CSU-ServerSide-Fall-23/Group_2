describe('NewsFeed Component', () => {
    const sampleArticles = [
      {
        title: 'Sample Article 1',
        image: 'sample-image-1.jpg',
        source: { name: 'Sample Source 1' },
        publishedAt: '2023-12-01T12:34:56Z',
        url: 'https://www.example.com/sample-article-1',
      },
      {
        title: 'Sample Article 2',
        image: 'sample-image-2.jpg',
        source: { name: 'Sample Source 2' },
        publishedAt: '2023-12-02T12:34:56Z',
        url: 'https://www.example.com/sample-article-2',
      },
    ];
  
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Replace with your development server URL
      cy.viewport(1200, 800); // Set a specific viewport size
    });
  
    it('Should render NewsFeed component correctly', () => {
      // Ensure the NewsFeed component is visible
      cy.get('.row').should('be.visible');
      cy.get('h1').should('have.text', 'News Feed');
    });
  
    it('Should render NewsCard for each article', () => {
      // Render the NewsFeed component with sample articles
      cy.get('.col-lg-3').should('have.length', sampleArticles.length);
  
      // Check if NewsCard components are rendered for each article
      sampleArticles.forEach((article, index) => {
        cy.get('.col-lg-3').eq(index).within(() => {
          cy.get('.card').should('have.attr', 'key', article.url);
          cy.get('.card-img').should('have.attr', 'src', article.image || 'path/to/placeholder.jpg');
          cy.get('.card-title').should(
            'have.text',
            article.source.name ? `${article.source.name.substring(0, 10)}...` : 'Untitled'
          );
          cy.get('.card-text').should(
            'have.text',
            article.publishedAt ? article.publishedAt.substring(0, 10) : ''
          );
        });
      });
    });
  });
  