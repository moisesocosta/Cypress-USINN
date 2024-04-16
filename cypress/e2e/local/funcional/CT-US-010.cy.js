const credentials = require('../../fixtures/credentials.json')

describe('CT-US-010 | Recuperar a senha', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('http://localhost:3000/login')
  })

  it('SUCESSO - Recuperar a senha', () => {
    cy.get('.d-flex > .text-decoration-none').click()
    cy.get('.form-control').type(credentials.email)
    cy.get('.btn').click()
    cy.visit('https://www.google.com/intl/pt-br/gmail/about/')
    cy.get('.header__aside__buttons > .button--medium').click()
    //Gmail com problema ainda...
  })
});