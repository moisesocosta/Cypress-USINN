import HomePage from '../../../pages/homePage';
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import DocumentsPage from '../../../pages/documentsPage';
import DiagramEditionPage from '../../../pages/diagramEditionPage';

const homePage = new HomePage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const documentsPage = new DocumentsPage()
const diagramEditionPage = new DiagramEditionPage()

describe('CT-US-004 | Salvar as alterações realizadas no diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    loginPage.accessLoginPage()
  })

  it('Cenário 01: O sistema salva automaticamente minhas alterações', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    dashboardPage.accessExistingDiagram()
    diagramEditionPage.makeChangesOnDiagram()
    diagramEditionPage.logOut()  
    
    homePage.accessLoginPage()  
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    documentsPage.accessDocumentsPage()
    dashboardPage.accessExistingDiagram()
  })
});