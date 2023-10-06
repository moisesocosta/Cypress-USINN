const credentials = require('../fixtures/credentials.json')

describe('CT-US-010 | Recuperar a senha', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Recuperar a senha', () => {
    cy.get('.d-flex > .text-decoration-none').click()
    //Ainda não tem como acessar a página de "Recuperar a senha"...
  })
});