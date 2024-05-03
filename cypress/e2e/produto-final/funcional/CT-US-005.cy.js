const credentials = require('../../../fixtures/credentials.json')

describe('CT-US-005 | Desfazer alterações', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO - Desfazer erros feitos no diagrama', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    cy.alterarDiagramas_teste()
    cy.get('#graph > svg > :nth-child(1) > :nth-child(2) > g > ellipse').click()
    cy.get('#delete').click()
    cy.get('#undo > img').click()
  })

  it('FALHA - ', () => {
    
  })
});