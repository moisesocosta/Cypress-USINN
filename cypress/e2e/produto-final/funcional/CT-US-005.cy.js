describe('CT-US-005 | Desfazer alterações', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })
  
  it('Cenário 01: Desfazer erros feitos no diagrama', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.alterarDiagramas_teste()

    cy.get('#graph > svg > :nth-child(1) > :nth-child(2) > g > ellipse').click()
    cy.get('#delete').click()

    cy.get('#undo > img').click()
  })

  it('Cenário 02: Desfazer erros feitos no diagrama', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.alterarDiagramas_teste()

    cy.get('#graph > svg > :nth-child(1) > :nth-child(2) > g > ellipse').click()
    cy.get('#delete').click()

    cy.get('#undo > img').click()
    cy.get('.swal2-popup').should('contain', 'Ocorreu algum problema')
  })
});