describe('CT-US-014 | Gerenciar compartilhamento de diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-014', () => {
    cy.verificar_login(Cypress.env('USER_EMAIL'))
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
  })

  it('Cenário 01: Realizado com sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    cy.get(':nth-child(1) > #diagram-card > .card-header').click()

    cy.get('#modelerNavbarToggle > :nth-child(1) .btn-light').click()
    cy.get('.col-4 > .form-select').select(1)
    cy.get('.swal2-popup').should('contain', 'Permissão Alterada')
  })
});