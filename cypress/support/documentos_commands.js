/// <reference types="Cypress"/>

Cypress.Commands.add('documentos_teste', ()=>{
  cy.get('[id="dashboard"]').should('exist')
  cy.get(':nth-child(2) > .text-white').click()
  //cy.get('[id="documentos"]').should('exist')
})