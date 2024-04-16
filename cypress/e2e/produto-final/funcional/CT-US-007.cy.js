const credentials = require('../../fixtures/credentials.json')

describe('CT-US-007 | Sair do sistema', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Sair da ferramenta com sucesso na homepage', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()
    
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
  })

  it('SUCESSO - Sair do sistema com alterações não salvas no diagrama', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    cy.get('#dropdownMenuButton').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
  })
});