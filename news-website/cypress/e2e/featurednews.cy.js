describe('FeaturedNews tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    // test carousel is visible
    it('render carousel', () => {
        cy.get(".carousel").should("be.visible")
    });

    it('render carousel item', () => {
        cy.get(".carousel-item").should("be.visible")
    });

    it('render carousel caption', () => {
        cy.get(".carousel-caption").should("be.visible")
    });

    it('happening now', () => {
        cy.get(".col-lg-4").contains("Happening Now")
    });

    it('happening now NewsCard renders', () => {
        cy.get(".col-lg-4").find(".card").should("be.visible")
    });
});
