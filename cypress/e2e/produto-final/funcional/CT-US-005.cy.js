describe('CT-US-005 | Desfazer alterações', function(){
  it('Cenário 01: Desfazer erros feitos no diagrama', () => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/login')
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
});