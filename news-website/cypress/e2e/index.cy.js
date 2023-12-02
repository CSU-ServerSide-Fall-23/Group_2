describe('index tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  // Test the logo is visible
  it('navbar-brand', () => {
    cy.get(".navbar-brand").contains("The Know")
    cy.get(".navbar")
        .should("be.visible")
  })

  // Test the Home link
  it('home', () => {
    cy.get(".nav-link").contains("Home").click()
    cy.location('pathname').should('eq', '/')
  })

  // Test the Business link
  it('business', () => {
    cy.get(".nav-link").contains("Business").click()
    cy.location('pathname').should('eq', '/category/business')
  })

  // Test the Entertainment link
  it('entertainment', () => {
    cy.get(".nav-link").contains("Entertainment").click()
    cy.location('pathname').should('eq', '/category/entertainment')
  })

  // Test the General link
  it('general', () => {
    cy.get(".nav-link").contains("General").click()
    cy.location('pathname').should('eq', '/category/general')
  })

  // Test the Health link
  it('health', () => {
    cy.get(".nav-link").contains("Health").click()
    cy.location('pathname').should('eq', '/category/health')
  })

  // Test the Science link
  it('science', () => {
    cy.get(".nav-link").contains("Science").click()
    cy.location('pathname').should('eq', '/category/science')
  })

  // Test the Technology link
  it('tech', () => {
    cy.get(".nav-link").contains("Technology").click()
    cy.location('pathname').should('eq', '/category/technology')
  })

  // Test the Search link
  it('search', () => {
    cy.get(".search ").contains("Search").click()
    cy.location('pathname').should('eq', '/search')
  })

  // Test the Search input
  it('search-input', () => {
    cy.get(".search").contains("Search").click()
    cy.get(".form-control")
        .should("be.visible")
  })
})