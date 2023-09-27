const credentials = require('../fixtures/credentials.json')
const credentialsWrong = require('../fixtures/credentialsWrong.json')

describe('CT-US-002 | Obter acesso ao sistema', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Obter acesso ao sistema', () => {
    cy.get('input[type="email"]').type(credentials.email)
    cy.get('input[type="password"]').type(credentials.password, {log: false})
  
    cy.get('[type="submit"]').click()
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Email diferente) - Obter acesso ao sistema', () => {
    cy.get('input[type="email"]').type(credentialsWrong.wrongEmail)
    cy.get('input[type="password"]').type(credentials.password, {log: false})
  
    cy.get('[type="submit"]').click()
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Senha diferente) - Obter acesso ao sistema', () => {
    cy.get('input[type="email"]').type(credentials.email)
    cy.get('input[type="password"]').type(credentialsWrong.wrongPassword, {log: false})
  
    cy.get('[type="submit"]').click()
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Email e senha diferentes) - Obter acesso ao sistema', () => {
    cy.get('input[type="email"]').type(credentialsWrong.wrongEmail)
    cy.get('input[type="password"]').type(credentialsWrong.wrongPassword, {log: false})
  
    cy.get('[type="submit"]').click()
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Domínio diferente) - Obter acesso ao sistema', () => {
    cy.get('input[type="email"]').type(credentialsWrong.wrongEmailDomain)
    cy.get('input[type="password"]').type(credentials.Password, {log: false})
  
    cy.get('[type="submit"]').click()
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Domínio e senha diferentes) - Obter acesso ao sistema', () => {
    cy.get('input[type="email"]').type(credentialsWrong.wrongEmailDomain)
    cy.get('input[type="password"]').type(credentialsWrong.wrongPassword, {log: false})
  
    cy.get('[type="submit"]').click()
    cy.get('[id="dashboard"]').should('exist')
  })
});