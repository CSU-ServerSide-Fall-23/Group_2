describe('Footer Component', () => {
    it('Should display contact information', () => {
      cy.visit('http://localhost:3000');

      cy.get('footer')
        .contains('Contact Us')
        .should('be.visible');

      cy.get('footer')
        .contains('kola_shreya@students.columbusstate.edu')
        .should('be.visible');
      cy.get('footer')
        .contains('mills_maria@students.columbusstate.edu')
        .should('be.visible');
      cy.get('footer')
        .contains('furlong_logan@students.columbusstate.edu')
        .should('be.visible');

      cy.get('footer')
        .contains('4225 University Ave')
        .should('be.visible');
    });
  
    it('Should log selected category when clicked', () => {
      cy.visit('http://localhost:3000');

      cy.get('ul')
        .contains('Politics')
        .click();

      cy.window().should('have.property', 'consoleHistory').and('include', 'Selected category: Politics');
    });
  });
  