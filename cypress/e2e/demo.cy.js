describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('SERVICETRADE_URL'));
    cy.get('.login-button').click();
    cy.get('#username').type(Cypress.env('SERVICETRADE_USERNAME'));
    cy.get('.c1d1b1e07').click();
    cy.get('#password').type(Cypress.env('SERVICETRADE_PASSWORD'));
    cy.get('.cc199ae96 > .c1d1b1e07').click();
  })
})