import { faker } from '@faker-js/faker'
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';

const email = faker.internet.email()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('CT-US-014 | Gerenciar compartilhamento de diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    loginPage.accessLoginPage()
  })

  it('Cenário 01: Realizado com sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.sharingDiagram(email)
  })
});