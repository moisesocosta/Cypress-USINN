import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-012 | Listar diagramas compartilhados comigo', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-012', () => {
    cy.novo_cadastro(email)
  })

  it('Cenário 01: Lista de Diagramas Gerada com Sucesso', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    //Acessa a página de "Compartilhados"
    cy.compartilhados_teste()
  })
});