describe('CT-US-015 | Excluir diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Diagramas removido com sucesso')
  })

  it('FALHA - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Não foi possível processar esta requisição')
  })

  it('FALHA - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()
    
    cy.get('.btn-secondary').click()
    //cy.get('[id="documentos"]').should('exist')
  })
});