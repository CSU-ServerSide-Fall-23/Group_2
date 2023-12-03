describe('category tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/category/business');
    });

    // Test NewsCard component is rendered
    it('renders NewsCard component', () => {
        cy.get(".card").should("be.visible")
    });

});
