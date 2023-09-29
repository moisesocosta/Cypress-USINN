const credentials = require('../fixtures/credentials.json')

describe('CT-US-012 | Listar diagramas compartilhados comigo', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Listar diagramas compartilhados comigo', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.compartilhados_teste()
  })
});