describe('service forms spec', () => {
    it('passes', () => {
      cy.visit(Cypress.env('DEVICEMAGIC_URL'));
      cy.get('#user_email').type(Cypress.env('DEVICEMAGIC_USERNAME'));
      cy.get('.btn-primary').click();
      cy.get('#user_password').type(Cypress.env('DEVICEMAGIC_PASSWORD'));
      cy.get('.btn-primary').click();
      cy.get('#forms_link > .main-link').click();
      cy.get('a').contains('Fire Extinguisher Location Form').click({force: true});
      cy.get('.btn-primary').click();
    })
  })
