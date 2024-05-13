const credentials = require('../../../fixtures/credentials.json')

describe('CT-US-004 | Salvar as alterações realizadas no diagrama', function(){
  describe('Cenário 01: O sistema salva automaticamente minhas alterações', () => {
    context('Dado que estou na área de criação de diagramas', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando começo a criar um diagrama', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(credentials.email, credentials.password)
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#btn-new').click()
        })
        
        context('E clico para voltar', () => {
          beforeEach(() => {
            cy.get('.me-4').click()
          })

          context('E abro o último diagrama alterado', () => {
            beforeEach(() => {
              cy.documentos_teste()
            })
            it('Então consigo ver e modificar o meu diagrama que foi salvo.', () => {
              cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
            })
          })
        })
      })
    })
  })

  describe('Cenário 02: O sistema não salva automaticamente minhas alterações', () => {
    context('Dado que estou na área de criação de diagramas', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
      })

      context('Quando começo a criar um diagrama', () => {
        beforeEach(() => {
          //Faz o login
          cy.login_teste(credentials.email, credentials.password)
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#btn-new').click()
        })
        
        context('E saio e entro novamente no sistema', () => {
          beforeEach(() => {
            cy.get('.me-4').click()
          })

          context('E abro o último diagrama alterado', () => {
            beforeEach(() => {
              cy.documentos_teste()
            })
            it('Então consigo ver e modificar o meu diagrama na última versão salva indicando feedback “suas últimas alterações salvas datam do dia… Na hora…”', () => {
              
            })
          })
        })
      })
    })
  })
});