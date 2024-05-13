describe('CT-US-002 | Acesso ao sistema', function(){
  describe.only('Cenário 01: Login realizado com sucesso', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando preencho os campos com dados válidos', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        })
        
        it('Então recebo uma mensagem de sucesso, o acesso ao sistema é liberado e sou redirecionado para a página inicial.', () => {
          cy.get('[id="dashboard"]').should('exist')
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando preencho os campos com dados inválidos', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(Cypress.env('USER_WRONG_EMAIL'), Cypress.env('USER_PASSWORD'))
        })
        
        it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
          cy.get('[id="dashboard"]').should('not.exist')
          cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Senha inválida)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando preencho os campos com dados inválidos', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_WRONG_PASSWORD'))
        })
        
        it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
          cy.get('[id="dashboard"]').should('not.exist')
          cy.get('.swal2-popup').should('contain', 'Credenciais inválidas')
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Email e senha diferentes)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando preencho os campos com dados inválidos', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(Cypress.env('USER_WRONG_EMAIL'), Cypress.env('USER_WRONG_PASSWORD'))
        })
        
        it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
          cy.get('[id="dashboard"]').should('not.exist')
          cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Domínio diferente)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando preencho os campos com dados inválidos', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(Cypress.env('USER_EMAIL_WRONG_DOMAIN'), Cypress.env('USER_PASSWORD'))
        })
        
        it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
          cy.get('[id="dashboard"]').should('not.exist')
          cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Domínio e senha diferentes)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando preencho os campos com dados inválidos(Domínio e senha diferentes)', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(Cypress.env('USER_EMAIL_WRONG_DOMAIN'), Cypress.env('USER_WRONG_PASSWORD'))
        })
        
        it('Então recebo uma mensagem de erro e indicação de que os campos precisam ser preenchidos corretamente.', () => {
          cy.get('[id="dashboard"]').should('not.exist')
          cy.get('.swal2-popup').should('contain', 'Usuário não encontrado')
        })
      })
    })
  })
});