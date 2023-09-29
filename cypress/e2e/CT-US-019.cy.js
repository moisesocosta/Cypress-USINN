const credentials = require('../fixtures/credentials.json')

describe('CT-US-019 | Acessar um diagrama compartilhado comigo', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Acessar um diagrama compartilhado comigo', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.compartilhados_teste()
    cy.get('.card-body').click()
  })
});