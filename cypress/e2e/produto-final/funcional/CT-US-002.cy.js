const credentials = require('../../../fixtures/credentials.json')
const credentialsWrong = require('../../../fixtures/credentialsWrong.json')

describe('CT-US-002 | Acesso ao sistema', function(){
  context('Dado que estou na página de login da USINN Modeler', () => {
    beforeEach(() => {
      //Acessa a página de "Login"
      cy.visit('https://usinnmodeler.vercel.app/login');
    })

    context('Quando preencho os campos com dados válidos', () => {
      beforeEach(() => {
        //Faz o login
        cy.login_teste(credentials.email, credentials.password)
      })
      
      it('Então recebo uma mensagem de sucesso, o acesso ao sistema é liberado e sou redirecionado para a página inicial.', () => {
          cy.get('[id="dashboard"]').should('exist')
      })
    })

    context('Quando preencho os campos com dados inválidos(Email diferente)', () => {
      beforeEach(() => {
        //Faz o login
        cy.login_teste(credentialsWrong.wrongEmail, credentials.password)
      })
      
      it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
        cy.get('[id="dashboard"]').should('not.exist')
        cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
      })
    })

    context('Quando preencho os campos com dados inválidos(Senha diferente)', () => {
      beforeEach(() => {
        //Faz o login
        cy.login_teste(credentials.email, credentialsWrong.wrongPassword)
      })
      
      it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
        cy.get('[id="dashboard"]').should('not.exist')
        cy.get('.swal2-popup').should('contain', 'Credenciais inválidas')
      })
    })

    context('Quando preencho os campos com dados inválidos(Email e senha diferentes)', () => {
      beforeEach(() => {
        //Faz o login
        cy.login_teste(credentialsWrong.wrongEmail, credentialsWrong.wrongPassword)
      })
      
      it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
        cy.get('[id="dashboard"]').should('not.exist')
        cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
      })
    })

    context('Quando preencho os campos com dados inválidos(Domínio diferente)', () => {
      beforeEach(() => {
        //Faz o login
        cy.login_teste(credentialsWrong.wrongEmailDomain, credentials.password)
      })
      
      it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
        cy.get('[id="dashboard"]').should('not.exist')
        cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
      })
    })

    context('Quando preencho os campos com dados inválidos(Domínio e senha diferentes)', () => {
      beforeEach(() => {
        //Faz o login
        cy.login_teste(credentialsWrong.wrongEmailDomain, credentialsWrong.wrongPassword)
      })
      
      it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
        cy.get('[id="dashboard"]').should('not.exist')
        cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
      })
    })
  })
});