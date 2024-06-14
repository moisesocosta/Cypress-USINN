describe('CT-US-010 | Recuperar a senha', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('SUCESSO - Recuperar a senha', () => {
    cy.get('.d-flex > .text-decoration-none').click()
    cy.get('.form-control').type(Cypress.env('USER_EMAIL'))
    cy.get('.btn').click()
    cy.visit('https://www.google.com/intl/pt-br/gmail/about/')
    cy.get('.header__aside__buttons > .button--medium').click()
    //Gmail com problema ainda...
  })
});