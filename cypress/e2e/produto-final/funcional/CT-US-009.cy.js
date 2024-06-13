describe('CT-US-009 | Excluir perfil', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('Cenário 01: Excluir perfil com Sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()

    cy.get('#password').type(Cypress.env('USER_PASSWORD'))
    cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
    cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
    cy.get('.modal-body > .btn-danger').click()
    cy.get('.swal2-popup').should('contain', 'Usuário excluído com sucesso')
  })

  it('Cenário 02: Cancelar o excluir perfil', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()   
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()

    cy.get('#password').type(Cypress.env('USER_PASSWORD'))
    cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()

    cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
    cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body > .btn-primary')
  })

  it('Cenário 03: Falha ao Excluir perfil ', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click() 
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()

    cy.get('#password').type(Cypress.env('USER_PASSWORD'))
    cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()

    cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
    cy.get('.modal-body > .btn-danger').click()
  })

  it('Cenário 04: Falha na conexão ao Excluir perfil', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()    

    cy.get('#password').type(Cypress.env('USER_PASSWORD'))
    cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
 
    
    cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
    cy.get('.modal-body > .btn-danger').click()
  })

  it('Cenário 05: Excluir perfil - Senha inválida', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()

    cy.get('#password').type(Cypress.env('USER_WRONG_PASSWORD'))
    cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
    cy.get('.swal2-popup').should('contain', 'A senha digitada não corresponde a senha cadastrada!')
  })
});