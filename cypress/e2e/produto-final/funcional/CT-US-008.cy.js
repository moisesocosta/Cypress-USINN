const credentials = require('../../fixtures/credentials.json')

describe('CT-US-008 | Atualizar perfil', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Atualizar perfil com Sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()
    
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
    cy.get(':nth-child(2) > .img-fluid').click()
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')
    cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
    cy.get('.swal2-popup').should('contain', 'Os dados foram atualizados com sucesso!')
  })

  it.only('FALHA - Cancelar o atualizar perfil', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()
    
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
    cy.get(':nth-child(2) > .img-fluid').click()
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')
    cy.get('.text-center > .text-decoration-none').click()
  })
});