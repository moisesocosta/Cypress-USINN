import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-013 | Baixar diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-013', () => {
    cy.novo_cadastro(email)
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato PNG)', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()
    //Escolhe a opção de PNG
    cy.get('.input-group > .form-select').select(1)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato JPEG)', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()
    //Escolhe a opção de JPEG
    cy.get('.input-group > .form-select').select(2)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato WEBP)', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()
    //Escolhe a opção de WEBP
    cy.get('.input-group > .form-select').select(3)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato PDF)', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()
    //Escolhe a opção de SVG
    cy.get('.input-group > .form-select').select(4)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('Cenário 01: Exportar Diagrama com sucesso(Formato SVG)', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()
    //Escolhe a opção de PDF
    cy.get('.input-group > .form-select').select(5)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('Cenário 02: Cancelar - Exportar Diagrama ', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()
    //Clica em cancelar
    cy.get('#exportModalId > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
  })
});