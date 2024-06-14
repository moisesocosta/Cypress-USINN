describe('Realizar requisição de Login e Cadastro via API', function(){
  it('Realizar requisição de Login', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:8080',
      body: {
        name: Cypress.env('USER_API'),
        email: Cypress.env('USER_API_EMAIL'),
        password: Cypress.env('USER_API_PASSWORD')
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(404)
    })
  })

  it('Realizar requisição de Cadastro', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:8080',
      body: {
        name: Cypress.env('USER_API'),
        email: Cypress.env('USER_API_EMAIL'),
        password: Cypress.env('USER_API_PASSWORD'),
        company: Cypress.env('USER_API_COMPANY'),
        office: Cypress.env('USER_API_OFFICE')
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(404)
      expect(response.body.token).to.exist
      let TokenResposta = response.body.token
    })
  })

  it('Listar usuários estando logado', () => {
    cy.api({
      method: 'GET',
      url: 'http://localhost:8080',
      headers: {
        Authorization: TokenResposta
      },
    }).then(response => response.body[0]).should('have.keys', ['name', 'birthday', 'role', 'email', 'password', 'passwordLocal', 'gender', 'company'])
  })
});