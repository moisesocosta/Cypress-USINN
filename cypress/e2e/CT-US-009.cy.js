const credentials = require('../fixtures/credentials.json')

describe('CT-US-009 | Excluir perfil', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Excluir perfil', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()
    
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    //Ainda não tem como acessar a página de "Excluir perfil"...
  })
});