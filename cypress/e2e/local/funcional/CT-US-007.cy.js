const credentials = require('../../../fixtures/credentials.json')

describe('CT-US-007 | Sair do sistema', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('http://localhost:3000/')
  })

  it.only('SUCESSO - Sair da ferramenta com sucesso na homepage', () => {
    cy.get('.d-flex > .bg-white').click()
    //Faz o login
    cy.login_teste(credentials.email, credentials.passwordLocal)

    //Acessa a página de Documentos
    cy.documentos_teste()
    
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
  })

  it.only('SUCESSO - Sair do sistema com alterações não salvas no diagrama', () => {
    cy.get('.d-flex > .bg-white').click()
    //Faz o login
    cy.login_teste(credentials.email, credentials.passwordLocal)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    cy.get('#dropdownMenuButton').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    cy.get('[style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgb(255, 255, 255); padding: 20px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px; z-index: 9999;"] > div > :nth-child(1)').click()
  })

  it('FALHA - Sair do sistema com alterações não salvas no diagrama', () => {
    cy.get('.d-flex > .bg-white').click()
    //Faz o login
    cy.login_teste(credentials.email, credentials.passwordLocal)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    cy.get('#dropdownMenuButton').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    cy.get('[style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgb(255, 255, 255); padding: 20px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 0px; z-index: 9999;"] > div > :nth-child(2)').click()
  })
});