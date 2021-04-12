describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it("Displays the GMDB header in the navigation bar", () => {
    cy.get('nav h1').should('contain', 'GMDB')
  })
})