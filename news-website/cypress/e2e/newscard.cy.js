describe('NewsCard Component', () => {
    const article = {
      title: 'Sample Article',
      image: 'sample-image.jpg',
      source: { name: 'Sample Source' },
      publishedAt: '2023-12-01T12:34:56Z',
      url: 'https://www.example.com/sample-article',
    };
  
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.viewport(1200, 800);
    });
  
    it('Should render NewsCard content correctly', () => {
      cy.get('.card').within(() => {
        cy.get('.card-img').should('have.attr', 'src', article.image || 'path/to/placeholder.jpg');
        cy.get('.card-img').should('have.attr', 'alt', article.title || 'Untitled');
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
  
    it('Should have a unique key for each NewsCard', () => {
      cy.get('.card').should('have.attr', 'key', article.url);
    });
  });
  