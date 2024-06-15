import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-006 | Criar diagramas USINN', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-006', () => {
    cy.novo_cadastro(email)
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