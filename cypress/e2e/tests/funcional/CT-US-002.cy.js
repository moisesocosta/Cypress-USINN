import { faker } from '@faker-js/faker'
import RegistrationPage from '../../../pages/registrationPage';
import LoginPage from '../../../pages/loginPage';

const email = faker.internet.email()
const registrationPage = new RegistrationPage()
const loginPage = new LoginPage()

describe('CT-US-002 | Acesso ao sistema', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    loginPage.accessLoginPage()
  })

  it('Preparo do CT-US-002', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Login realizado com sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
  })

  it('Cenário 02: Inserção de dados inválidos(Email inválido)', () => {
    //Faz o login
    loginPage.loginWithEmailInvalid(Cypress.env('USER_WRONG_EMAIL'), Cypress.env('USER_PASSWORD'))
  })

  it('Cenário 02: Inserção de dados inválidos(Senha inválida)', () => {
    //Faz o login
    loginPage.loginWithPasswordInvalid(Cypress.env('USER_EMAIL'), Cypress.env('USER_WRONG_PASSWORD'))
  })

  it('Cenário 02: Inserção de dados inválidos(Email e senha diferentes)', () => {
    //Faz o login
    loginPage.loginInvalid(Cypress.env('USER_WRONG_EMAIL'), Cypress.env('USER_WRONG_PASSWORD'))
  })

  it('Cenário 02: Inserção de dados inválidos(Domínio diferente)', () => {
    //Faz o login
    loginPage.loginWithDomainInvalid(Cypress.env('USER_EMAIL_WRONG_DOMAIN'), Cypress.env('USER_WRONG_PASSWORD'))
  })

  it('Cenário 02: Inserção de dados inválidos(Domínio e senha diferentes)', () => {
    //Faz o login
    loginPage.loginWithDomainAndPasswordInvalid(Cypress.env('USER_EMAIL_WRONG_DOMAIN'), Cypress.env('USER_WRONG_PASSWORD'))
  })
});