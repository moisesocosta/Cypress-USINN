import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('CT-US-017 | Atalho para documentos', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Cenário 01: Diagrama adicionado com sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.favoriteDiagram()
  })
});