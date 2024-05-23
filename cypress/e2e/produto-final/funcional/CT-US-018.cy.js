describe('CT-US-018 | Atalho para documentos', function(){
  describe.only('Cenário 01: Diagrama adicionado com sucesso.', () => {
    context('Dado que estou na página Documentos', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando seleciono um diagrama e clico no ícone favoritar', () => {
        beforeEach(() => {
          //Favorita o diagrama
          cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .p-0 > img').click()
        })

        it('Então visualizo o diagrama na seção de favoritos e uma mensagem "Diagramas adicionado aos Meus favoritos".', () => {
          cy.get('.swal2-popup').should('contain', 'Diagrama adicionado aos meus favoritos')
        })
      })
    })
  })
});