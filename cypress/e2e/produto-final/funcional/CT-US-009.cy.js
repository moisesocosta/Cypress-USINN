describe('CT-US-009 | Excluir perfil', function(){
  describe('Cenário 01: Excluir perfil com Sucesso', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção excluir conta', () => {
          beforeEach(() => {
            cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
          })

          context('E insiro minha senha e clico em excluir', () => {
            beforeEach(() => {
              cy.get('#password').type(Cypress.env('USER_PASSWORD'))
              cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
            })

            context('E visualizo um alerta e clico em confirmar', () => {
              beforeEach(() => {
                cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
                cy.get('.modal-body > .btn-danger').click()
              })

              it('Então visualizo uma notificação de sucesso e a homepage da USINN Modeler, e não tenho mais acesso aos meus diagramas.', () => {
                cy.get('.swal2-popup').should('contain', 'Usuário excluído com sucesso')
              })
            })
          })
        })
      })
    })
  })

  describe('Cenário 02: Cancelar o excluir perfil', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção excluir conta', () => {
          beforeEach(() => {
            cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
          })

          context('E insiro minha senha e clico em excluir', () => {
            beforeEach(() => {
              cy.get('#password').type(Cypress.env('USER_PASSWORD'))
              cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
            })

            context('E visualizo um alerta e clico em “Cancelar”', () => {
              beforeEach(() => {
                cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
                cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body > .btn-primary')
              })

              it('Então visualizo uma notificação de erro e permaneço na página atual', () => {
                
              })
            })
          })
        })
      })
    })
  })

  describe('Cenário 03: Falha ao Excluir perfil ', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção excluir conta', () => {
          beforeEach(() => {
            cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
          })

          context('E insiro minha senha e clico em excluir', () => {
            beforeEach(() => {
              cy.get('#password').type(Cypress.env('USER_PASSWORD'))
              cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
            })

            context('E visualizo um alerta e clico em confirmar', () => {
              beforeEach(() => {
                cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
                cy.get('.modal-body > .btn-danger').click()
              })

              it('Então visualizo uma notificação de erro e permaneço na página atual.', () => {
                
              })
            })
          })
        })
      })
    })
  })

  describe('Cenário 04: Falha na conexão ao Excluir perfil', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção excluir conta', () => {
          beforeEach(() => {
            cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
          })

          context('E insiro minha senha e clico em excluir', () => {
            beforeEach(() => {
              cy.get('#password').type(Cypress.env('USER_PASSWORD'))
              cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
            })

            context('E visualizo um alerta e clico em confirmar', () => {
              beforeEach(() => {
                cy.get('#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
                cy.get('.modal-body > .btn-danger').click()
              })

              it('Então visualizo uma notificação sobre falha de conexão e permaneço na página atual.', () => {
                
              })
            })
          })
        })
      })
    })
  })

  describe.only('Cenário 05: Excluir perfil - Senha inválida', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção excluir conta', () => {
          beforeEach(() => {
            cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
          })

          context('E insiro uma senha inválida e clico em excluir', () => {
            beforeEach(() => {
              cy.get('#password').type(Cypress.env('USER_WRONG_PASSWORD'))
              cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
            })

            it('Então visualizo uma notificação sobre o erro na senha e permaneço na página atual', () => {
              cy.get('.swal2-popup').should('contain', 'A senha digitada não corresponde a senha cadastrada!')
            })
          })
        })
      })
    })
  })
});