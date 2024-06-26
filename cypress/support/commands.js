/// <reference types="Cypress"/>
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('alterarDiagramas_teste', () => {
  cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  cy.get('#Section1 > .ExpandButtons > .border-0 > img').click()
  cy.get('[src="/images/pontoDeAbertura.GIF"]').drag('#graph > svg')
})

Cypress.Commands.add('cadastro_teste', (name, birthday, role) => {
  cy.get('[name="name"]').type(name)
  cy.get('[name="birthday"]').type(birthday)
  cy.get('[name="role"]').select(role)
})

Cypress.Commands.add('compartilhados_teste', () => {
  cy.get('[id="dashboard"]').should('exist')
  cy.get(':nth-child(2) > .text-white').click()
  //cy.get('[id="documentos"]').should('exist')
  cy.get(':nth-child(3) > .text-dark').click()
  //cy.get('[id="compartilhados"]').should('exist')
})

Cypress.Commands.add('compartilharDiagramas_teste', () => {
  cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .px-2 > .bi').click()
  cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
})

Cypress.Commands.add('documentos_teste', () => {
  cy.get('[id="dashboard"]').should('exist')
  cy.get(':nth-child(2) > .text-white').click()
  //cy.get('[id="documentos"]').should('exist')
})

Cypress.Commands.add('excluirDiagramas_teste', () => {
  cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .px-2 > .bi').click()
  cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
  cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body').should('contain', 'Seu diagrama será excluído e você não terá mais acesso a ele!')
})

Cypress.Commands.add('exportarDiagramas_teste', () => {
  cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  cy.get('[data-bs-target="#exportModalId"]').click()
})

Cypress.Commands.add('login_teste', (user, password) => {
  cy.get('input[type="email"]').type(user)
  cy.get('input[type="password"]').type(password, {log: false})
  cy.get('[type="submit"]').click()
})

Cypress.Commands.add('novo_cadastro', (email) => {
  cy.visit(`${Cypress.env('BASE_URL')}/cadastro`)

  //Coloca as informações
  cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
  cy.get('[name="email"]').type(email)
  cy.get('[name="password"]').type(Cypress.env('USER_PASSWORD'))
  cy.get('[name="gender"]').select(Cypress.env('USER_GENDER'))
  cy.get('[name="company"]').type(Cypress.env('USER_COMPANY'))
  cy.get('[type="checkbox"]').click()
  
  cy.intercept('POST', '/api/signup').as('new-user')
  cy.get('[type="submit"]').click()
  cy.wait('@new-user').its('response.statusCode').should('eq', 200)
})