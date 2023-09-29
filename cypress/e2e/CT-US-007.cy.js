const credentials = require('../fixtures/credentials.json')

describe('CT-US-007 | Sair do sistema', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Sair do sistema', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

  })
});