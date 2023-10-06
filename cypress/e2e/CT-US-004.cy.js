const credentials = require('../fixtures/credentials.json')

describe('CT-US-004 | Salvar alterações realizadas no diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Salvar alterações realizadas no diagrama', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()

    cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
    cy.get('#save > img').click()
    cy.get('#dropdownMenuButton').click()
    cy.get(':nth-child(2) > .dropdown-item').click()
    
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()

    cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  })
});