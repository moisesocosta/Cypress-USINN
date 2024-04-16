const credentials = require('../../fixtures/credentials.json')

describe('CT-US-011 | Listar diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Listar os meus diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
  })

  it.only('FALHA(Falha na conexão) - Listar meus diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
  })
});