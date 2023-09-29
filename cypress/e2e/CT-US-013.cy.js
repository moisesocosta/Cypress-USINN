const credentials = require('../fixtures/credentials.json')

describe('CT-US-013 | Baixar um diagrama em um formato específico', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO(Formato PNG) - Baixar um diagrama em um formato específico', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.exportarDiagramas_teste()
    cy.get('.form-select').select(1)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato JPEG) - Baixar um diagrama em um formato específico', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.exportarDiagramas_teste()
    cy.get('.form-select').select(2)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato WEBP) - Baixar um diagrama em um formato específico', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.exportarDiagramas_teste()
    cy.get('.form-select').select(3)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato SVG) - Baixar um diagrama em um formato específico', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.exportarDiagramas_teste()
    cy.get('.form-select').select(4)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato PDF) - Baixar um diagrama em um formato específico', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.exportarDiagramas_teste()
    cy.get('.form-select').select(5)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it.only('FALHA - Baixar um diagrama em um formato específico', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.documentos_teste()
    cy.exportarDiagramas_teste()
    cy.get('#exportModalId > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
  })
});