describe('CT-US-016 | Atualizar Informações de um Diagrama', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it.only('Cenário 01: Diagrama Atualizado com sucesso.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    //Salva as alterações
    cy.get('#save > img').click()
    cy.get('.swal2-popup').should('contain', 'Diagrama salvo com sucesso!')
  })

  it.only('Cenário 02: Erro ao Atualizar Diagrama.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    //Salva as alterações
    cy.get('#save > img').click()
    cy.get('.swal2-popup').should('contain', 'Erro ao salvar o diagrama')
  })

  it('Cenário 04: Cancelar atualização de diagrama.', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    cy.get('a > .me-4').click()
  })
});