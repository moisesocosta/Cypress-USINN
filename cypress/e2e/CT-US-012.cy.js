const credentials = require('../fixtures/credentials.json')

describe('CT-US-012 | Listar diagramas compartilhados comigo', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Listar diagramas compartilhados comigo', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.get('[id="dashboard"]').should('exist')
    cy.get(':nth-child(2) > .text-white').click()
    //cy.get('[id="documentos"]').should('exist')
    cy.get(':nth-child(3) > .text-dark').click()
    //cy.get('[id="compartilhados"]').should('exist')
  })
});