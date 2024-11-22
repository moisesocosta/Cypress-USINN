import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('CT-US-017 | Gerar um link de compartilhamento de diagrama', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Cenário 01: Compartilhar diagrama com sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.shareByLink()
  })

  it('Cenário 04: Cancelar', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.cancelShareByLink()
  })
});