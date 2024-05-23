describe('CT-US-014 | Gerenciar compartilhamento de diagramas', function(){
  describe.only('Cenário 01: Realizado com sucesso', () => {
    context('Dado que estou na página Documentos', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico no diagrama', () => {
        beforeEach(() => {
          cy.get(':nth-child(1) > #diagram-card > .card-header').click()
        })

        context('E clico no ícone de compartilhamento', () => {
          beforeEach(() => {
            cy.get('#modelerNavbarToggle > :nth-child(1) > .btn').click()
          })

          context('E altero a opção permissão de acesso do Usuário que havia compartilhado, entre as disponíveis: Leitor, Editor e Remover Acesso', () => {
            beforeEach(() => {
              cy.get('.col-4 > .form-select').select(1)
            })

            it('Então o sistema retorna "Permissão Alterada"', () => {
              cy.get('.swal2-popup').should('contain', 'Permissão Alterada')
            })
          })
        })
      })
    })
  })
});