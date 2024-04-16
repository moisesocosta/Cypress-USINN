const credentials = require('../../fixtures/credentials.json')

describe('CT-US-004 | Salvar as alterações realizadas no diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('http://localhost:3000/login')
  })

  it.only('SUCESSO - O sistema salva automaticamente as minhas alterações', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()

    cy.get('#btn-new').click()
    cy.get('.me-4').click()
    cy.documentos_teste()
    cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  })

  it('FALHA - O sistema não salva automaticamente minhas alterações', () => {
    
  })
});