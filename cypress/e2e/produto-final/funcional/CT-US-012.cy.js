const credentials = require('../../fixtures/credentials.json')

describe('CT-US-012 | Listar diagramas compartilhados comigo', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Listar diagramas gerada com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Compartilhados"
    cy.compartilhados_teste()
  })

  it('FALHA - Falha de conexão ao gerar lista de diagramas com sucesso', () => {
    

  })
});