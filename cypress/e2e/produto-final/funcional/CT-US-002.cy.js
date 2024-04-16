const credentials = require('../../fixtures/credentials.json')
const credentialsWrong = require('../../fixtures/credentialsWrong.json')

describe('CT-US-002 | Acesso ao sistema', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Login realizado com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    cy.get('[id="dashboard"]').should('exist')
  })

  it('FALHA(Email diferente) - Inserção de dados inválidos', () => {
    //Faz o login
    cy.login_teste(credentialsWrong.wrongEmail, credentials.password)

    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
  })

  it('FALHA(Senha diferente) - Inserção de dados inválidos', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentialsWrong.wrongPassword)

    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'Credenciais inválidas')
  })

  it('FALHA(Email e senha diferentes) - Inserção de dados inválidos', () => {
    //Faz o login
    cy.login_teste(credentialsWrong.wrongEmail, credentialsWrong.wrongPassword)

    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
  })

  it('FALHA(Domínio diferente) - Falha ao realizar login', () => {
    //Faz o login
    cy.login_teste(credentialsWrong.wrongEmailDomain, credentials.password)

    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
  })

  it('FALHA(Domínio e senha diferentes) - Falha ao realizar login', () => {
    //Faz o login
    cy.login_teste(credentialsWrong.wrongEmailDomain, credentialsWrong.wrongPassword)
    
    cy.get('[id="dashboard"]').should('not.exist')
    cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
  })
});