const credentials = require('../../fixtures/credentials.json')

describe('CT-US-013 | Baixar diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('SUCESSO(Formato PNG) - Exportar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()

    //Escolhe a opção de PNG
    cy.get('.form-select').select(1)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato JPEG) - Exportar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()

    //Escolhe a opção de JPEG
    cy.get('.form-select').select(2)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato WEBP) - Exportar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()

    //Escolhe a opção de WEBP
    cy.get('.form-select').select(3)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato SVG) - Exportar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()

    //Escolhe a opção de SVG
    cy.get('.form-select').select(4)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('SUCESSO(Formato PDF) - Exportar diagrama com sucesso', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()

    //Escolhe a opção de PDF
    cy.get('.form-select').select(5)
    cy.get('.swal2-popup').should('contain', 'Diagrama exportado com sucesso!')
  })

  it('FALHA - Cancelar - Exportar Diagrama ', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Clica no botão de "Exportar"
    cy.exportarDiagramas_teste()

    //Clica em cancelar
    cy.get('#exportModalId > .modal-dialog > .modal-content > .modal-header > #closeModal').click()
  })

  it('FALHA - Falha de conexão ao exportar diagrama', () => {
    

  })
});