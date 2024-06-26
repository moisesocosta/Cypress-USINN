describe('Visualizar compatibilidade da USINN Modeler com o navegador Google Chrome', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('www.google.com')
  })

  it('Apenas executado quando é no Chrome', {browser: 'chrome'},() => {
    cy.get('#APjFqb').type('usinn modeler{enter}')
    cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.get('.d-flex > .bg-white').click()
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.get('[id="dashboard"]').should('exist')
  })

  it('Apenas executado quando é no Firefox', {browser: 'firefox'},() => {
    cy.get('#APjFqb').type('usinn modeler{enter}')
    cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.get('.d-flex > .bg-white').click()

    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.get('[id="dashboard"]').should('exist')
  })

  it('Apenas executado quando é no Edge', {browser: 'edge'},() => {
    cy.get('#APjFqb').type('usinn modeler{enter}')
    cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.get('.d-flex > .bg-white').click()

    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.get('[id="dashboard"]').should('exist')
  })

  it.only('Apenas executado quando é no Safari', {browser: 'webkit'},() => {
    cy.get('#APjFqb').type('usinn modeler{enter}')
    cy.get('#rso > :nth-child(1) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.get('.d-flex > .bg-white').click()

    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    cy.get('[id="dashboard"]').should('exist')
  })
});