import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-015 | Excluir diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-015', () => {
    cy.novo_cadastro(email)
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
  })

  it('SUCESSO - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'O Diagrama foi excluído com sucesso')
  })

  it('FALHA - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
    cy.get('img:nth-child(1)').click()

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()

    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Não foi possível processar esta requisição')
  })

  it('FALHA - Excluir diagramas', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
    cy.get('img:nth-child(1)').click()

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Excluir"
    cy.excluirDiagramas_teste()
    
    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body .btn-light').click()
    //cy.get('[id="documentos"]').should('exist')
  })
});