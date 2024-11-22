import { faker } from '@faker-js/faker';
import RegistrationPage from '../../../pages/registrationPage';

const registrationPage = new RegistrationPage()

describe('CT-US-001 | Cadastrar Usuários', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    registrationPage.accessRegistrationPage()
  })

  it('Cenário 01: Cadastro realizado com sucesso', () => {
    registrationPage.registrationSomeCredentials(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
    registrationPage.registrationSuccess(faker.internet.email(), Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    registrationPage.registrationSomeCredentials(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
    registrationPage.registrationWithEmailInvalid(Cypress.env('USER_EMAIL_WITHOUT_DOMAIN'))
  })

  it('Cenário 02: Inserção de dados inválidos(Senha inválida)', () => {
    registrationPage.registrationSomeCredentials(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'))
    registrationPage.registrationWithPasswordInvalid(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD_WITHOUT_8_CHARACTERS'))
  })

  it('Cenário 03: Voltar à página de login', () => {
    registrationPage.goBackToLoginPage()
    cy.url().should('include', '/login')
  })
});