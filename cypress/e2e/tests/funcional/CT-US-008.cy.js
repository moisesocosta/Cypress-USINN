import { faker } from '@faker-js/faker'
import RegistrationPage from '../../../pages/registrationPage';
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import UpdateProfilePage from '../../../pages/updateProfilePage';

const email = faker.internet.email()
const registrationPage = new RegistrationPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const updateProfilePage = new UpdateProfilePage()

describe('CT-US-008 | Atualizar perfil', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Preparo do CT-US-008', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Atualizar perfil com Sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))

    dashboardPage.updateUser()
    updateProfilePage.updateCompany()
  })

  it('Cenário 04: Cancelar o atualizar perfil', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
  
    dashboardPage.updateUser()
    updateProfilePage.updateCanceled()
  })
});