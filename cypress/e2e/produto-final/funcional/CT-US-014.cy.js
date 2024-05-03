const credentials = require('../../../fixtures/credentials.json')

describe('CT-US-014 | Gerenciar compartilhamento de diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO - Realizado com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()
    //Ainda não tem como gerenciar as opções de compartilhamento de diagrama...
  })

  it('FALHA - Falha ao realizar', () => {
    

  })

  it('FALHA - Falha de conexão', () => {
    

  })
});