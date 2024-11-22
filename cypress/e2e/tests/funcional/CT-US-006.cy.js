import { faker } from '@faker-js/faker'
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';

const email = faker.internet.email()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('CT-US-006 | Criar diagramas USINN', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Preparo do CT-US-006', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Entrar na página de Criação de diagrama com Sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
  
    dashboardPage.createNewDiagram()
  })

  it('Cenário 02: Falha ao entrar na página de Criação de diagrama', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_WRONG_PASSWORD'))
  
    dashboardPage.loginWithPasswordInvalid()
  })
});