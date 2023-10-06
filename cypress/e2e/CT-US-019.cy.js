const credentials = require('../fixtures/credentials.json')

describe('CT-US-019 | Acessar um diagrama compartilhado comigo', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Acessar um diagrama compartilhado comigo', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)
    
    //Acessa a página de "Compartilhados"
    cy.compartilhados_teste()
    
    cy.get('.card-body').click()
  })
});