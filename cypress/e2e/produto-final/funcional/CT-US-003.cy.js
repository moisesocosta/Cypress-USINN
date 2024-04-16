const credentials = require('../../fixtures/credentials.json')

describe('CT-US-003 | Compartilhar arquivo', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO - Arquivo compartilhado com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()
    //Ainda não tem como adicionar o email dos integrantes...
  })

  it('FALHA - Falha ao compartilhar arquivo', () => {
    
  })

  it('FALHA - Erro de preenchimento dos campos', () => {
    
  })
});