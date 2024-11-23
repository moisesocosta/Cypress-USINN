import { faker } from '@faker-js/faker'
import RegistrationPage from '../../../pages/registrationPage';
import LoginPage from '../../../pages/loginPage';
import DashboardPage from '../../../pages/dashboardPage';
import DocumentsPage from '../../../pages/documentsPage';

const email = faker.internet.email()
const registrationPage = new RegistrationPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const documentsPage = new DocumentsPage()

describe('CT-US-012 | Listar diagramas compartilhados', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    loginPage.accessLoginPage()
  })

  it('Preparo do CT-US-012', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Lista de Diagramas Gerada com Sucesso', () => {
    //Faz o login
    loginPage.loginSuccess(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    dashboardPage.accessDocumentsPage()

    //Acessa a página de "Compartilhados"
    documentsPage.accessSharedDiagramsPage()
  })
});