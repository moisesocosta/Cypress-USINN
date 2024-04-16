/// <reference types="Cypress"/>

Cypress.Commands.add('cadastro_teste', (name, birthday, role)=>{
  cy.get('[name="name"]').type(name)
  cy.get('[name="birthday"]').type(birthday)
  cy.get('[name="role"]').select(role)
})