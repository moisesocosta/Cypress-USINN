const credentials = require('../../fixtures/credentials.json')

describe('CT-US-009 | Excluir perfil', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Excluir perfil', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()
    
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#password').type(credentials.password)
    cy.get('.show > .modal-dialog > .modal-content > form > .modal-footer > .btn').click()
    cy.get('.modal-body > .btn-danger').click()
    cy.get('.swal2-popup').should('contain', 'Usuário excluído com sucesso')
    //Ainda não tem como acessar a página de "Excluir perfil"...
  })
});