describe('CT-US-017 | Gerar um link de compartilhamento de diagrama', function(){
  describe('Cenário 01: Compartilhar diagrama com sucesso', () => {
    context('Dado que  estou na página de edição de diagramas', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico em “Compartilhar” e visualizo uma janela pop-up', () => {
        beforeEach(() => {
          //Acessa o menu de diagramas e clica em "Compartilhar"
          cy.compartilharDiagramas_teste()
        })

        context('E clico em “Copiar Link” ', () => {
          beforeEach(() => {
            cy.get('.modal-footer > .text-primary').click()
          })

          it('Então o sistema gera um URL para o diagrama selecionado e visualizo uma confirmação que o link foi copiado com sucesso.', () => {

          })
        })
      })
    })
  })

  describe('Cenário 04: Cancelar', () => {
    context('Dado que  estou na página de edição de diagramas', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico em “Compartilhar” e visualizo uma janela pop-up', () => {
        beforeEach(() => {
          //Acessa o menu de diagramas e clica em "Compartilhar"
          cy.compartilharDiagramas_teste()
        })

        context('E clico no botão “X” na parte superior direita', () => {
          beforeEach(() => {
            cy.get('#ShareDiagramModal > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
          })

          it('Então visualizo a tela de edição de diagramas.', () => {

          })
        })
      })
    })
  })
});