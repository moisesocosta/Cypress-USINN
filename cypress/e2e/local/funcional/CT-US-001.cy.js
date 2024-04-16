const credentials = require('../../fixtures/credentials.json')
const credentialsWrong = require('../../fixtures/credentialsWrong.json')

describe('CT-US-001 | Cadastrar Usuários', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('http://localhost:3000')
  })

  it('SUCESSO - Cadastro realizado com sucesso', () => {
    //Coloca as informações
    cy.cadastro_teste(credentials.name, credentials.birthday, credentials.role)
    cy.get('[name="email"]').type(credentials.email)
    cy.get('[name="password"]').type(credentials.password)
    cy.get('[name="gender"]').select(credentials.gender)
    cy.get('[name="company"]').type(credentials.company)
    cy.get('[type="checkbox"]').click()
    
    cy.intercept('POST', '/api/signup').as('new-user')
    cy.get('[type="submit"]').click()
    cy.wait('@new-user').its('response.statusCode').should('eq', 200)

    //Faz o login
    cy.login_teste()
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Email inválido) - Inserção de dados inválidos', () => {
    //Coloca as informações
    cy.cadastro_teste(credentials.name, credentials.birthday, credentials.role)
    cy.get('[name="email"]').type(credentialsWrong.wrongEmailWithoutDomain)
    cy.get('.invalid-feedback').should('contain', 'Endereço de e-mail inválido')
  })

  it('FALHA(Senha inválida) - Inserção de dados inválidos', () => {
    //Coloca as informações
    cy.cadastro_teste(credentials.name, credentials.birthday, credentials.role)
    cy.get('[name="email"]').type(credentials.email)
    cy.get('[name="password"]').type(credentialsWrong.wrongPasswordWithout8Characters)
    cy.get('.invalid-feedback').should('contain', 'Senha deve ter no mínimo 8 caracteres')
  })

  it('SUCESSO - Voltar à página de login', () => {
    cy.get('.text-center > .text-decoration-none').click()
    cy.url().should('include', '/login')
  })
});