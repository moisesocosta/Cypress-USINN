/// <reference types="Cypress"/>

Cypress.Commands.add('excluirDiagramas_teste', ()=>{
  cy.get('.px-2 > .bi').click()
  cy.get(':nth-child(3) > .dropdown-item').click()
  cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body').should('contain', 'Seu diagrama será excluído e você não terá mais acesso a ele!')
})