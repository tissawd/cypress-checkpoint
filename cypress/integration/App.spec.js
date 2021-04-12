describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it("Displays the GMDB header in the navigation bar", () => {
    cy.get('nav h1').should('contain', 'GMDB')
  })

  it("Displays a search bar in the navigation bar", () => {
    cy.get('nav input').should('exist')
  })
  
  it("Displays movie poster images on the home page", () => {
    cy.get('img').should('exist')
    
  })

  it("Search bar should take user input", () => {
    cy.get('input').type("search test")
    cy.get('input').should('have.value', 'search test')
  })
})