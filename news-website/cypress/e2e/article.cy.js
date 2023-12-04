describe('Article Component', () => {
    const article = {
      title: 'Sample Article',
      image: 'sample-image.jpg',
      description: 'This is a sample article description.',
      source: { name: 'Sample Source' },
      publishedAt: '2023-12-01T12:34:56Z',
      url: 'https://www.example.com/sample-article',
    };
  
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Replace with your development server URL
      cy.viewport(1200, 800); // Set a specific viewport size
    });
  
    it('Should render article content correctly', () => {
      // Render the Article component with the provided article data
      cy.get('.article').within(() => {
        cy.get('h2').should('have.text', article.title);
        cy.get('img').should('have.attr', 'src', article.image || 'placeholder');
        cy.get('p').eq(0).should('have.text', article.description);
        cy.get('p').eq(1).should(
          'have.text',
          `Source: ${article.source.name}, Published At: ${article.publishedAt}`
        );
        cy.get('a').should('have.attr', 'href', article.url);
      });
    });
  
    it('Should open the article link in a new tab', () => {
      // Click the "Read more" link and assert that it opens in a new tab
      cy.get('.article a').should('have.attr', 'target', '_blank');
    });
  });
  