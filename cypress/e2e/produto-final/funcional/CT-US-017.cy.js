describe('CT-US-017 | Compartilhar por link', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('Cenário 01: Compartilhar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()

    cy.get('.modal-footer > .text-primary').click()
  })

  it('Cenário 02: Falha ao compartilhar diagrama', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()

    cy.get('.modal-footer > .text-primary').click()
    cy.get('.swal2-popup').should('contain', 'Erro ao copiar o link')
  })

  it('Cenário 04: Cancelar', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()

    cy.get('#ShareDiagramModal > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
  })
});