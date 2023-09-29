/// <reference types="Cypress"/>

Cypress.Commands.add('login_teste', (user, password)=>{
  cy.get('input[type="email"]').type(user)
  cy.get('input[type="password"]').type(password, {log: false})
  
  cy.get('[type="submit"]').click()
})