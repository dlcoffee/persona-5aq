describe('search', () => {
  it('filters results with user input', () => {
    cy.visit('/')

    cy.get('input[name="search"]').type('what shape')

    cy.get('li').should('have.length', 1)
    cy.get('li').contains('A triangle')
  })
})
