describe('CT-US-011 | Listar diagramas', function(){
  describe('Cenário 01: Lista de Diagramas Gerada com Sucesso', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico em Documentos', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
        })
        
        it('Então visualizo a página Documentos com todos os meus diagramas.', () => {
          cy.get('[id="documentsPage"]').should('exist')
        })
      })
    })
  })
});