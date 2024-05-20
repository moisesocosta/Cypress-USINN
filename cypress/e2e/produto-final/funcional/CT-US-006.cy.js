describe('CT-US-006 | Criar diagramas USINN', function(){
  describe('Cenário 01: Entrar na página de Criação de diagrama com Sucesso', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico em “+Novo”', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#btn-new').click()
        })
        
        it('Então devo entrar na página de criação dos diagramas', () => {
          cy.get('[id="dashboard"]').should('exist')
        })
      })
    })
  })
});