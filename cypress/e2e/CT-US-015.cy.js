const credentials = require('../fixtures/credentials.json')

describe('CT-US-015 | Excluir diagramas', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Excluir diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.excluirDiagramas_teste()
    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Diagramas excluídos com sucesso')
  })

  it('FALHA - Excluir diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.excluirDiagramas_teste()
    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Não foi possível processar esta requisição')
  })

  it('FALHA - Excluir diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.excluirDiagramas_teste()
    cy.get('.btn-secondary').click()
    //cy.get('[id="documentos"]').should('exist')
  })
});