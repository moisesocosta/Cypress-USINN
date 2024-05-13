describe('CT-US-001 | Cadastrar Usuários', function(){
  describe('Cenário 01: Cadastro realizado com sucesso', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/cadastro')
      })

      context('Quando preencho os campos com dados válidos', () => {
        beforeEach(() => {
          //Coloca as informações
          cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
          cy.get('[name="email"]').type(Cypress.env('USER_EMAIL'))
          cy.get('[name="password"]').type(Cypress.env('USER_PASSWORD'))
          cy.get('[name="gender"]').select(Cypress.env('USER_GENDER'))
          cy.get('[name="company"]').type(Cypress.env('USER_COMPANY'))
        })

        context('E clico em “Li e aceito os termos de uso”', () => {
          beforeEach(() => {
            cy.get('[type="checkbox"]').click()
          })

          it('Então recebo uma mensagem de sucesso e estou de volta à página de login', () => {
            cy.intercept('POST', '/api/signup').as('new-user')
            cy.get('[type="submit"]').click()
            cy.wait('@new-user').its('response.statusCode').should('eq', 200)
          })
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/cadastro')
      })

      context('Quando preencho os campos com dados inválidos', () => {
        beforeEach(() => {
          //Coloca as informações
          cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
          cy.get('[name="email"]').type(Cypress.env('USER_EMAIL_WITHOUT_DOMAIN'))
        })
  
        context('E clico em “Li e aceito os termos de uso”', () => {
          beforeEach(() => {
            cy.get('[type="checkbox"]').click()
          })
  
          it('Então recebo uma indicação que os campos precisam ser preenchidos corretamente.', () => {
            cy.get('.invalid-feedback').should('contain', 'Endereço de e-mail inválido')
          })
        })
      })
    })
  })

  describe('Cenário 02: Inserção de dados inválidos(Senha inválida)', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/cadastro')
      })

      context('Quando preencho os campos com dados inválidos', () => {
        beforeEach(() => {
          //Coloca as informações
          cy.cadastro_teste(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
          cy.get('[name="email"]').type(Cypress.env('USER_EMAIL'))
          cy.get('[name="password"]').type(Cypress.env('USER_PASSWORD_WITHOUT_8_CHARACTERS'))
        })
  
        context('E clico em “Li e aceito os termos de uso”', () => {
          beforeEach(() => {
            cy.get('[type="checkbox"]').click()
          })
  
          it('Então recebo uma indicação que os campos precisam ser preenchidos corretamente.', () => {
            cy.get('.invalid-feedback').should('contain', 'Senha deve ter no mínimo 8 caracteres')
          })
        })
      })
    })
  })

  describe('Cenário 03: Voltar à página de login', () => {
    context('Dado que estou na página de cadastro da USINN', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/cadastro')
      })

      context('Quando clico na opção “Voltar para login”', () => {
        beforeEach(() => {
          cy.get('.text-center > .text-decoration-none').click()
        })
  
        it('Então sou direcionado para a página de login.', () => {
          cy.url().should('include', '/login')
        })
      })
    })
  })
});