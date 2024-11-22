import { faker } from '@faker-js/faker'
import RegistrationPage from '../../../pages/registrationPage';
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';

const email = faker.internet.email()
const emailDifferent = faker.internet.email()
const registrationPage = new RegistrationPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('CT-US-009 | Excluir perfil', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Preparo do CT-US-009', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Excluir perfil com Sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
  
    dashboardPage.deleteUser()
  })

  it('Cenário 02: Cancelar o excluir perfil', () => {
    //Faz um novo cadastro
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
    
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
  
    dashboardPage.cancelDeleteUser()
  })

  it('Cenário 05: Excluir perfil - Senha inválida', () => {    
    //Faz um novo cadastro
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), emailDifferent, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
    
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
  
    dashboardPage.failDeleteUser()
  })
});