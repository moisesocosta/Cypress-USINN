describe('CT-US-015 | Excluir diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('Cenário 01: Excluir diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'O Diagrama foi excluído com sucesso')
  })

  it('Cenário 02: Erro ao excluir diagrama ', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Erro ao excluir diagrama')
  })

  it.only('Cenário 03: Excluir diagrama - Cancelar.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('.modal-body > .btn-light').click()
  })
});