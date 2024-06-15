import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-016 | Atualizar um diagrama existente', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-016', () => {
    cy.novo_cadastro(email)
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
  })

  it('SUCESSO - Atualizar um diagrama existente', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))

    //Acessa a página de Documentos
    cy.documentos_teste()

    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()

    //Salva as alterações
    cy.get('#save > img').click()
    cy.get('.swal2-popup').should('contain', 'Diagrama salvo com sucesso!')
  })
});