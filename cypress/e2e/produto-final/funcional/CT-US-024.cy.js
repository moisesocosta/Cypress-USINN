describe('US024 - Redefinir Senha', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('Cenário 01: Diagrama adicionado com sucesso.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get(':nth-child(2) > .form-control').type(Cypress.env('USER_WRONG_PASSWORD'))
    cy.get(':nth-child(3) > .form-control').type(Cypress.env('USER_WRONG_PASSWORD'))
  })

  it('Cenário 03: Senha inválida.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get(':nth-child(2) > .form-control').type(Cypress.env('USER_PASSWORD_WITHOUT_8_CHARACTERS'))
    cy.get(':nth-child(3) > .form-control').type(Cypress.env('USER_PASSWORD_WITHOUT_8_CHARACTERS'))
    cy.get('.invalid-feedback').should('contain', 'Senha deve ter no mínimo 8 caracteres')
  })

  it.only('Cenário 04: Confirmação de senha inválida.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get(':nth-child(2) > .form-control').type(Cypress.env('USER_WRONG_PASSWORD'))
    cy.get(':nth-child(3) > .form-control').type(Cypress.env('USER_PASSWORD_WITHOUT_8_CHARACTERS'))
    cy.get('.invalid-feedback').should('contain', 'As senhas precisam ser iguais')
  })

  it('Cenário 05: Cancelar a redefinição de senha.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get('.text-center > .text-decoration-none').click()
  })
});