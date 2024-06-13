describe('CT-US-001 | Cadastrar Usuários', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('http://localhost:3000')
  })

  it('Cenário 01: Cadastro realizado com sucesso', () => {
    //Coloca as informações
    cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
    cy.get('[name="email"]').type(Cypress.env('USER_EMAIL'))
    cy.get('[name="password"]').type(Cypress.env('USER_PASSWORD'))
    cy.get('[name="gender"]').select(Cypress.env('USER_GENDER'))
    cy.get('[name="company"]').type(Cypress.env('USER_COMPANY'))
    cy.get('[type="checkbox"]').click()
    
    cy.intercept('POST', '/api/signup').as('new-user')
    cy.get('[type="submit"]').click()
    cy.wait('@new-user').its('response.statusCode').should('eq', 200)
  })

  it('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    //Coloca as informações
    cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
    cy.get('[name="email"]').type(Cypress.env('USER_EMAIL_WITHOUT_DOMAIN'))

    cy.get('[type="checkbox"]').click()
    cy.get('.invalid-feedback').should('contain', 'Endereço de e-mail inválido')
  })

  it('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    //Coloca as informações
    cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
    cy.get('[name="email"]').type(Cypress.env('USER_EMAIL'))
    cy.get('[name="password"]').type(Cypress.env('USER_PASSWORD_WITHOUT_8_CHARACTERS'))

    cy.get('[type="checkbox"]').click()
    cy.get('.invalid-feedback').should('contain', 'Senha deve ter no mínimo 8 caracteres')
  })

  it('Cenário 03: Voltar à página de login', () => {
    cy.get('.text-center > .text-decoration-none').click()
    cy.url().should('include', '/login')
  })
});