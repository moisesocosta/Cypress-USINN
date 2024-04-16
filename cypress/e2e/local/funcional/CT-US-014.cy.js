const credentials = require('../../fixtures/credentials.json')
const credentialsWrong = require('../../fixtures/credentialsWrong.json')

describe('CT-US-014 | Gerenciar compartilhamento de diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('http://localhost:3000/login')
  })

  it.only('SUCESSO - Realizado com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, "senha123")

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    
    //Acessa o menu de diagramas e clica em "Compartilhar"
    cy.compartilharDiagramas_teste()
    cy.get('.col-9 > .form-control').type(credentialsWrong.wrongEmail)
    cy.get('.modal-body > :nth-child(2) > :nth-child(1) > .col > .form-select').select("2")
    cy.get('.text-end > .btn').click()
    cy.get('.modal-body > :nth-child(2) > :nth-child(2) > .row > .col-9 > .form-control').type(credentialsWrong.wrongEmailDomain)
    cy.get('.modal-footer > .bg-primary').click()
    })

  it('FALHA - Falha ao realizar', () => {
    

  })

  it('FALHA - Falha de conexão', () => {
    

  })
});