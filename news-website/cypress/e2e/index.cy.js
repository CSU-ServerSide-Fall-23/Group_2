describe('index tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('navbar-brand', () => {
    cy.get(".navbar-brand").contains("The Know")
    cy.get(".navbar")
        .should("be.visible")
  })

  it('home', () => {
    cy.get(".nav-link").contains("Home").click()
    cy.location('pathname').should('eq', '/')
  })

  it('business', () => {
    cy.get(".nav-link").contains("Business").click()
    cy.location('pathname').should('eq', '/category/business')
  })

  it('entertainment', () => {
    cy.get(".nav-link").contains("Entertainment").click()
    cy.location('pathname').should('eq', '/category/entertainment')
  })

  it('general', () => {
    cy.get(".nav-link").contains("General").click()
    cy.location('pathname').should('eq', '/category/general')
  })

  it('health', () => {
    cy.get(".nav-link").contains("Health").click()
    cy.location('pathname').should('eq', '/category/health')
  })

  it('science', () => {
    cy.get(".nav-link").contains("Science").click()
    cy.location('pathname').should('eq', '/category/science')
  })

  it('tech', () => {
    cy.get(".nav-link").contains("Technology").click()
    cy.location('pathname').should('eq', '/category/technology')
  })

  it('search', () => {
    cy.get(".search ").contains("Search").click()
    cy.location('pathname').should('eq', '/search')
  })

  it('search-input', () => {
    cy.get(".search").contains("Search").click()
    cy.get(".form-control")
        .should("be.visible")
  })
})