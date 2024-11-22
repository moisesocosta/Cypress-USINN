import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import DiagramEditionPage from '../../../pages/diagramEditionPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const diagramEditionPage = new DiagramEditionPage()

describe('CT-US-013 | Baixar diagrama', function(){
  //beforeEach(() => {
    //Acessa a página de "Login"
    //loginPage.accessLoginPage()
  //})

  it('Cenário 01: Exportar Diagrama com sucesso(Formato PNG)', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.accessExistingDiagram()
  
    diagramEditionPage.exportDiagramPNG()
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato JPEG)', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.accessExistingDiagram()
  
    diagramEditionPage.exportDiagramJPEG()
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato WEBP)', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.accessExistingDiagram()
  
    diagramEditionPage.exportDiagramWEBP()
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato PDF)', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.accessExistingDiagram()
  
    diagramEditionPage.exportDiagramPDF()
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato SVG)', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.accessExistingDiagram()
  
    diagramEditionPage.exportDiagramSVG()
  })

  it('Cenário 02: Cancelar - Exportar Diagrama ', () => {
    //Faz o login
    loginPage.loginSuccess(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    
    dashboardPage.accessExistingDiagram()
  
    diagramEditionPage.cancelExportDiagram()
  })
});