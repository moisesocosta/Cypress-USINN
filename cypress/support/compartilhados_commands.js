/// <reference types="Cypress"/>

Cypress.Commands.add('compartilhados_teste', ()=>{
  cy.get('[id="dashboard"]').should('exist')
  cy.get(':nth-child(2) > .text-white').click()
  //cy.get('[id="documentos"]').should('exist')
  cy.get(':nth-child(3) > .text-dark').click()
  //cy.get('[id="compartilhados"]').should('exist')
})