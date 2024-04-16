const credentials = require('../../fixtures/credentials.json')

describe('CT-US-017 | Gerar um link de compartilhamento de diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Gerar um link de compartilhamento de diagrama', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    cy.get('[id="dashboard"]').should('exist')
    cy.get(':nth-child(2) > .text-white').click()
    //cy.get('[id="documentos"]').should('exist')

    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()
    cy.get('.input-group > .btn > .bi').click()
  })
});