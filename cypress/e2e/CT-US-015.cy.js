const credentials = require('../fixtures/credentials.json')

describe('CT-US-015 | Excluir diagramas', function(){
  beforeEach(() => {
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Excluir diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.get('[id="dashboard"]').should('exist')
    cy.get(':nth-child(2) > .text-white').click()
    //cy.get('[id="documentos"]').should('exist')
    cy.get('.px-2 > .bi').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body').should('contain', 'Seu diagrama será excluído e você não terá mais acesso a ele!')
    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Diagramas excluídos com sucesso')
  })

  it('FALHA - Excluir diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.get('[id="dashboard"]').should('exist')
    cy.get(':nth-child(2) > .text-white').click()
    //cy.get('[id="documentos"]').should('exist')
    cy.get('.px-2 > .bi').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body').should('contain', 'Seu diagrama será excluído e você não terá mais acesso a ele!')
    cy.get('.modal-body > .btn-primary').click()
    cy.get('.swal2-popup').should('contain', 'Não foi possível processar esta requisição')
  })

  it('FALHA - Excluir diagramas', () => {
    cy.login_teste(credentials.email, credentials.password)
    cy.get('[id="dashboard"]').should('exist')
    cy.get(':nth-child(2) > .text-white').click()
    //cy.get('[id="documentos"]').should('exist')
    cy.get('.px-2 > .bi').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    cy.get('#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body').should('contain', 'Seu diagrama será excluído e você não terá mais acesso a ele!')
    cy.get('.btn-secondary').click()
    //cy.get('[id="documentos"]').should('exist')
  })
});