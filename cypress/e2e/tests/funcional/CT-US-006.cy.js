import { faker } from '@faker-js/faker'
import LoginPage from '../../../pages/loginPage';
import RegistrationPage from '../../../pages/registrationPage'

const email = faker.internet.email()

describe('CT-US-006 | Criar diagramas USINN', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    loginPage.accessLoginPage()
  })

  it('Preparo do CT-US-006', () => {
    registrationPage.newRegistration(Cypress.env('USER_NAME'), Cypress.env('USER_BIRTHDAY'), Cypress.env('USER_ROLE'), email, Cypress.env('USER_PASSWORD'), Cypress.env('USER_GENDER'), Cypress.env('USER_COMPANY'))
  })

  it('Cenário 01: Entrar na página de Criação de diagrama com Sucesso', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.get('[id="dashboard"]').should('exist')
  })
});