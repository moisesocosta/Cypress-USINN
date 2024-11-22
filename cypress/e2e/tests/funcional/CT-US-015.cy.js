import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import DocumentsPage from './../../../pages/documentsPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const documentsPage = new DocumentsPage()

describe('CT-US-015 | Excluir diagramas', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Cenário 01: Excluir diagrama com sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL2'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    dashboardPage.accessDocumentsPage()

    documentsPage.deleteDiagram()
  })

  it('Cenário 03: Excluir diagrama - Cancelar', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL2'), Cypress.env('USER_PASSWORD'))
    
    //Acessa a página de Documentos
    dashboardPage.accessDocumentsPage()

    documentsPage.cancelDeleteDiagram()
  })
});