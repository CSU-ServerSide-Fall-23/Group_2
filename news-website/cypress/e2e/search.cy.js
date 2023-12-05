describe('search functionality tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('clicks search button with no query', () => {
        cy.get(".search .btn-danger").click()
        cy.location('pathname').should('eq', '/search');
    });

    it('submits search query', () => {
        cy.get(".search .form-control").type("test");
        cy.get(".search .btn-danger").click();
        cy.location('pathname').should('eq', '/search');
        cy.location('search').should('eq', '?q=test');
    });
});
