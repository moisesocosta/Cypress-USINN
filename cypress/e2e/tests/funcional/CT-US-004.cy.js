import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-004 | Salvar as alterações realizadas no diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-004', () => {
    cy.novo_cadastro(email)
  })

  it('Cenário 01: O sistema salva automaticamente minhas alterações', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()

    cy.get('.me-4').click()
        
    cy.documentos_teste()
    cy.get(':nth-child(1) > #diagram-card > .card-header > :nth-child(1) > .fw-bold').click()
  })

  it('Cenário 02: O sistema não salva automaticamente minhas alterações', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.get('.me-4').click()
    cy.documentos_teste()
  })
});