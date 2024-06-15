import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-019 | Atalho para documentos', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-019', () => {
    cy.novo_cadastro(email)
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    cy.get('#btn-new').click()
  })

  it('Cenário 01: Diagrama adicionado com sucesso.', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Favorita o diagrama
    cy.get(':nth-child(1) > #diagram-card > .card-header > .dropdown > .p-0 > img').click()
    cy.get('.swal2-popup').should('contain', 'Diagrama adicionado aos meus favoritos')
  })
});