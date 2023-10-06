const credentials = require('../fixtures/credentials.json')

describe('CT-US-015 | Excluir diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Diagramas excluídos com sucesso')
  })

  it('FALHA - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Não foi possível processar esta requisição')
  })

  it('FALHA - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()
    
    cy.get('.btn-secondary').click()
    //cy.get('[id="documentos"]').should('exist')
  })
});