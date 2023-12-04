describe('search functionality tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    // Test clicking the search button without entering a query
    it('clicks search button with no query', () => {
        cy.get(".search .btn-danger").click()
        cy.location('pathname').should('eq', '/search');
    });

    // Test entering text in the search bar and submitting
    it('submits search query', () => {
        cy.get(".search .form-control").type("test");
        cy.get(".search .btn-danger").click();
        cy.location('pathname').should('eq', '/search');
        cy.location('search').should('eq', '?q=test');
    });

    // Test the news cards are rendered
    it('renders NewsCard component', () => {
        cy.get(".card").should("be.visible")
    });
});
