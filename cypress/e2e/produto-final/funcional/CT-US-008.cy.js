describe('CT-US-008 | Atualizar perfil', function(){
  describe.only('Cenário 01: Atualizar perfil com Sucesso', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico em atualizar perfil', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
          cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        })
        
        context('E insiro os novos dados Válidos', () => {
          beforeEach(() => {
            cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')
          })

          context('E clico no botão Confirmar', () => {
            beforeEach(() => {
              cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
            })

            it('Então espero o sistema atualizar meu perfil e visualizo a página inicial.', () => {
              cy.get('.swal2-popup').should('contain', 'Os dados foram atualizados com sucesso!')
            })
          })
        })
      })
    })
  })

  describe('Cenário 02: Falha no atualizar perfil ', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico em atualizar perfil', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
          cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        })
        
        context('E insiro os novos dados Válidos', () => {
          beforeEach(() => {
            cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')
          })

          context('E clico no botão Confirmar', () => {
            beforeEach(() => {
              cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
            })

            it('Então visualizo uma notificação de erro e permaneço na página atual.', () => {
              
            })
          })
        })
      })
    })
  })

  describe('Cenário 03: Falha no atualizar perfil', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico em atualizar perfil', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
          cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        })
        
        context('E insiro os novos dados Válidos', () => {
          beforeEach(() => {
            cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')
          })

          context('E clico no botão Confirmar', () => {
            beforeEach(() => {
              cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
            })

            it('Então visualizo uma notificação de erro e indicação de dados inválidos e permaneço na página atual.', () => {
              
            })
          })
        })
      })
    })
  })

  describe.only('Cenário 04: Cancelar o atualizar perfil', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico em atualizar perfil', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
          cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        })
        
        context('E insiro os novos dados Válidos', () => {
          beforeEach(() => {
            cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')
          })

          context('E clico no botão cancelar', () => {
            beforeEach(() => {
              cy.get('.text-center > .text-decoration-none').click({force: true})
            })

            it('Então visualizo a homepage da USINN Modeler.', () => {
              cy.get('[id="dashboard"]').should('exist')
            })
          })
        })
      })
    })
  })
});