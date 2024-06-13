describe('CT-US-006 | Criar diagramas USINN', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('Cenário 01: Entrar na página de Criação de diagrama com Sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.get('[id="dashboard"]').should('exist')
  })

  it('Cenário 02: Falha ao entrar na página de Criação de diagrama ', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.get('.swal2-popup').should('contain', 'Erro ao criar novo diagrama')
  })
});