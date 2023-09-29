const credentials = require('../fixtures/credentials.json')
const credentialsWrong = require('../fixtures/credentialsWrong.json')

describe('CT-US-006 | Criar diagrama', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Criar diagrama', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA - Criar diagrama', () => {
    cy.login_teste(credentials.email, credentialsWrong.wrongPassword)
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'Credenciais inválidas')
  })
});