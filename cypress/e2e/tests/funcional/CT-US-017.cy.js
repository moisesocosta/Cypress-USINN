import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-017 | Gerar um link de compartilhamento de diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-017', () => {
    cy.novo_cadastro(email)
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
  })

  it('Cenário 01: Compartilhar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()

    cy.get('.modal-footer > .text-primary').click()
  })

  it('Cenário 04: Cancelar', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()

    cy.get('#ShareDiagramModal > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
  })
});