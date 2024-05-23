describe('CT-US-013 | Exportar diagrama', function(){
  describe('Cenário 01: Exportar Diagrama com sucesso(Formato PNG)', () => {
    context('Dado que na página de Edição de Diagrama', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico não exportar como e escolho o formato desejado', () => {
        beforeEach(() => {
          //Clica no botão de "Exportar"
          cy.exportarDiagramas_teste()
        })

        context('E clico no botão exportar', () => {
          beforeEach(() => {
            //Escolhe a opção de PNG
            cy.get('.input-group > .form-select').select(1)
          })

          it('Então visualizo a página dos diagramas', () => {
            cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
          })
        })
      })
    })
  })

  describe('Cenário 01: Exportar Diagrama com sucesso(Formato JPEG)', () => {
    context('Dado que na página de Edição de Diagrama', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico não exportar como e escolho o formato desejado', () => {
        beforeEach(() => {
          //Clica no botão de "Exportar"
          cy.exportarDiagramas_teste()
        })

        context('E clico no botão exportar', () => {
          beforeEach(() => {
            //Escolhe a opção de PNG
            cy.get('.input-group > .form-select').select(2)
          })

          it('Então visualizo a página dos diagramas', () => {
            cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
          })
        })
      })
    })
  })

  describe('Cenário 01: Exportar Diagrama com sucesso(Formato WEBP)', () => {
    context('Dado que na página de Edição de Diagrama', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico não exportar como e escolho o formato desejado', () => {
        beforeEach(() => {
          //Clica no botão de "Exportar"
          cy.exportarDiagramas_teste()
        })

        context('E clico no botão exportar', () => {
          beforeEach(() => {
            //Escolhe a opção de PNG
            cy.get('.input-group > .form-select').select(3)
          })

          it('Então visualizo a página dos diagramas', () => {
            cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
          })
        })
      })
    })
  })

  describe('Cenário 01: Exportar Diagrama com sucesso(Formato SVG)', () => {
    context('Dado que na página de Edição de Diagrama', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico não exportar como e escolho o formato desejado', () => {
        beforeEach(() => {
          //Clica no botão de "Exportar"
          cy.exportarDiagramas_teste()
        })

        context('E clico no botão exportar', () => {
          beforeEach(() => {
            //Escolhe a opção de PNG
            cy.get('.input-group > .form-select').select(4)
          })

          it('Então visualizo a página dos diagramas', () => {
            cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
          })
        })
      })
    })
  })

  describe('Cenário 01: Exportar Diagrama com sucesso(Formato PDF)', () => {
    context('Dado que na página de Edição de Diagrama', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico não exportar como e escolho o formato desejado', () => {
        beforeEach(() => {
          //Clica no botão de "Exportar"
          cy.exportarDiagramas_teste()
        })

        context('E clico no botão exportar', () => {
          beforeEach(() => {
            //Escolhe a opção de PNG
            cy.get('.input-group > .form-select').select(5)
          })

          it('Então visualizo a página dos diagramas', () => {
            cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
          })
        })
      })
    })
  })

  describe.only('Cenário 02: Cancelar - Exportar Diagrama ', () => {
    context('Dado que na página de Edição de Diagrama', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico não exportar como e escolho o formato desejado', () => {
        beforeEach(() => {
          //Clica no botão de "Exportar"
          cy.exportarDiagramas_teste()
        })

        context('E clico em cancelar', () => {
          beforeEach(() => {
            //Clica em cancelar
            cy.get('#exportModalId > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
          })

          it('Então visualizo a página dos diagramas', () => {
            
          })
        })
      })
    })
  })
});