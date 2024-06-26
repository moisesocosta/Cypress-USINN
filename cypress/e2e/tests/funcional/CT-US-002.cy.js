import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-002 | Acesso ao sistema', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-002', () => {
    cy.novo_cadastro(email)
  })

  it('Cenário 01: Login realizado com sucesso', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    
    cy.get('[id="dashboard"]').should('exist')
  })

  it('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_WRONG_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'E-mail ou senha inválidos')
  })

  it('Cenário 02: Inserção de dados inválidos(Senha inválida)', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_WRONG_PASSWORD'))
    
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'E-mail ou senha inválidos')
  })

  it('Cenário 02: Inserção de dados inválidos(Email e senha diferentes)', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_WRONG_EMAIL'), Cypress.env('USER_WRONG_PASSWORD'))
    
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'E-mail ou senha inválidos')
  })

  it('Cenário 02: Inserção de dados inválidos(Domínio diferente)', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL_WRONG_DOMAIN'), Cypress.env('USER_PASSWORD'))
    
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'E-mail ou senha inválidos')
  })

  it('Cenário 02: Inserção de dados inválidos(Domínio e senha diferentes)', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL_WRONG_DOMAIN'), Cypress.env('USER_WRONG_PASSWORD'))
    
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'E-mail ou senha inválidos')
  })
});