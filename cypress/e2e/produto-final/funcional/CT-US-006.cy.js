const credentials = require('../../../fixtures/credentials.json')
const credentialsWrong = require('../../../fixtures/credentialsWrong.json')

describe('CT-US-006 | Criar diagramas USINN', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO - Criar diagrama', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA - Falha ao entrar na página de Criação de diagrama', () => {
    
  })
});