const credentials = require('../fixtures/credentials.json')

describe('CT-US-001 | Cadastrar Usuário', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/cadastro')
  })

  it('SUCESSO - Cadastrar usuário', () => {
    //Coloca as informações
    cy.get('[name="name"]').type(credentials.name)
    cy.get('[name="birthday"]').type(credentials.birthday)
    cy.get('[name="role"]').select(credentials.role)
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
});