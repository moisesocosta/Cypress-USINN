describe('CT-US-018 | Atalho para documentos', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/login')
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  })

  it('Cenário 01: Diagrama adicionado com sucesso.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Favorita o diagrama
    cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .p-0 > img').click()
    cy.get('.swal2-popup').should('contain', 'Diagrama adicionado aos meus favoritos')
  })
});