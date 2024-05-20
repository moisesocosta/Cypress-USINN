describe('CT-US-005 | Desfazer alterações', function(){
  describe('Cenário 01: Desfazer erros feitos no diagrama', () => {
    context('Dado que estou na área de criação de diagramas', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })

      context('Quando começo a criar um diagrama', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#btn-new').click()
        })
        
        context('E insiro um elemento no diagrama', () => {
          beforeEach(() => {
            cy.alterarDiagramas_teste()
          })

          context('E apago esse elemento', () => {
            beforeEach(() => {
              cy.get('#graph > svg > :nth-child(1) > :nth-child(2) > g > ellipse').click()
              cy.get('#delete').click()
            })

            context('E aperto Ctrl + Z Ou clico na função desfazer', () => {
              beforeEach(() => {
                cy.get('#undo > img').click()
              })

              it('Então o sistema refaz as últimas alterações.', () => {
                cy.wait(500)
              })
            })
          })
        })
      })
    })
  })
});