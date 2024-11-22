import { faker } from '@faker-js/faker'
import RegistrationPage from '../../../pages/registrationPage';
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import DiagramEditionPage from '../../../pages/diagramEditionPage';

const email = faker.internet.email()
const registrationPage = new RegistrationPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const diagramEditionPage = new DiagramEditionPage()

describe('CT-US-007 | Sair do sistema', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it.only('Preparo do CT-US-007', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Sair da ferramenta com sucesso na homepage', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
    dashboardPage.logOut()
  })

  it('Cenário 02: Sair do sistema com alterações não salvas no diagrama', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    dashboardPage.accessExistingDiagram()
    diagramEditionPage.makeChangesOnDiagram()
    diagramEditionPage.logOut()
  })

  it('Cenário 03: Sair do sistema com alterações não salvas no diagrama', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    dashboardPage.accessExistingDiagram()
    diagramEditionPage.makeChangesOnDiagram()
    diagramEditionPage.logOut()
  })
});