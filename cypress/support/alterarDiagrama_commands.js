/// <reference types="Cypress"/>

Cypress.Commands.add('alterarDiagramas_teste', ()=>{
  cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  cy.get('[src="/images/pontoDeAbertura.GIF"]').drag('#graph > svg')
})