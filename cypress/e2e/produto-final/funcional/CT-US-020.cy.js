describe('CT-US-020 | Favoritar diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Favoritar diagramas', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de "Documentos"
    cy.documentos_teste()

    //Favorita o diagrama
    cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .p-0 > img').click()
    cy.get('.swal2-popup').should('contain', 'Diagrama favoritado com sucesso!')
    cy.get('.swal2-close').click()
    cy.get(':nth-child(2) > .text-dark').click()
  })
});