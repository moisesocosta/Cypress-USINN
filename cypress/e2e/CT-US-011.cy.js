const credentials = require('../fixtures/credentials.json')

describe('CT-US-011 | Listar meus diagramas', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO - Listar meus diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
  })

  it('FALHA - Listar meus diagramas', () => {
    
  })
});