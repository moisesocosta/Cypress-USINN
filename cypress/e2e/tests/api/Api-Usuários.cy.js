import { faker } from '@faker-js/faker';
const email = faker.internet.email()

describe('Realizar requisição de Login e Cadastro via API', function(){
  let TokenResposta;

  it('Realizar requisição de Cadastro', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:8080/api/signup',
      body: {
        name: Cypress.env('USER_NAME'),
        email: email,
        password: Cypress.env('USER_PASSWORD'),
        company: Cypress.env('USER_COMPANY'),
        birthday: '2014-06-27',
        gender: Cypress.env('USER_GENDER'),
        role: Cypress.env('USER_ROLE'),
        accept: true
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })

  it('Realizar requisição de Login', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:8080/api/signin',
      body: {
        email: email,
        password: Cypress.env('USER_PASSWORD')
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.token).to.exist
      TokenResposta = response.body.token;
    })
  })

  it('Listar usuários estando logado', () => {
    cy.api({
      method: 'GET',
      url: 'http://localhost:8080/api/user',
      headers: {
        Authorization: TokenResposta
      },
      failOnStatusCode: false
    }).then(response => response.body[0]).should('have.keys', ['name', 'birthday', 'role', 'email', 'password', 'gender', 'company'])
  })
});