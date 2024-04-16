const credentials = require('../../fixtures/credentials.json')

describe('CT-US-016 | Atualizar um diagrama existente', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('http://localhost:3000/login')
  })

  it('SUCESSO - Atualizar um diagrama existente', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    //Salva as alterações
    cy.get('#save > img').click()
    cy.get('.swal2-popup').should('contain', 'Diagrama salvo com sucesso!')
  })
});