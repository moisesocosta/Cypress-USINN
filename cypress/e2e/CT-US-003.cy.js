const credentials = require('../fixtures/credentials.json')

describe('CT-US-003 | Compartilhar arquivo com outros usuários', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Compartilhar arquivo com outros usuários', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()
    //Ainda não tem como adicionar o email dos integrantes...
  })
});