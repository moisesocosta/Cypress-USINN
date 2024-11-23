import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import DiagramEditionPage from '../../../pages/diagramEditionPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const diagramEditionPage = new DiagramEditionPage()

describe('CT-US-016 | Atualizar um diagrama existente', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    loginPage.accessLoginPage()
  })

  it('Cenário 01: Diagrama Atualizado com sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    dashboardPage.accessExistingDiagram()
    diagramEditionPage.makeChangesOnDiagram()
    diagramEditionPage.saveChanges()

    dashboardPage.accessExistingDiagram()
  })

  it('Cenário 04: Cancelar atualização de diagrama', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    dashboardPage.accessExistingDiagram()
    diagramEditionPage.makeChangesOnDiagram()
    diagramEditionPage.returnHomePage()
  })
});