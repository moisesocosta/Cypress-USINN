describe('CT-US-014 | Gerenciar compartilhamento de diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('Cenário 01: Realizado com sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get(':nth-child(1) > #diagram-card > .card-header').click()

    cy.get('#modelerNavbarToggle > :nth-child(1) > .btn').click()
    cy.get('.col-4 > .form-select').select(1)
    cy.get('.swal2-popup').should('contain', 'Permissão Alterada')
  })

  it('Cenário 02: Falha ao realizar ', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get(':nth-child(1) > #diagram-card > .card-header').click()

    cy.get('#modelerNavbarToggle > :nth-child(1) > .btn').click()
    cy.get('.col-4 > .form-select').select(1)
    cy.get('.swal2-popup').should('contain', 'Erro ao Alterar Permissão')
  })
});