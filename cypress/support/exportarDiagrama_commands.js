/// <reference types="Cypress"/>

Cypress.Commands.add('exportarDiagramas_teste', () => {
  cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  cy.get('[data-bs-target="#exportModalId"]').click()
})