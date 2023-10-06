/// <reference types="Cypress"/>

Cypress.Commands.add('compartilharDiagramas_teste', ()=>{
  cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .px-2 > .bi').click()
    cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
})