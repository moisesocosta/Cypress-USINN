const credentials = require('../fixtures/credentials.json')

describe('CT-US-017 | Gerar um link de compartilhamento de diagrama', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Gerar um link de compartilhamento de diagrama', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.get('[id="dashboard"]').should('exist')
    cy.get(':nth-child(2) > .text-white').click()
    //cy.get('[id="documentos"]').should('exist')
    cy.get('.px-2 > .bi').click()
    cy.get('.card-header > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('.input-group > .btn > .bi').click()
  })
});