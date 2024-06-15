import { faker } from '@faker-js/faker'

const email = faker.internet.email()

describe('CT-US-005 | Desfazer alterações', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-005', () => {
    cy.novo_cadastro(email)
  })

  it('Cenário 01: Desfazer erros feitos no diagrama', () => {
    //Faz o login
    cy.login_teste(email, Cypress.env('USER_PASSWORD'))

    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#btn-new').click()
        
    cy.alterarDiagramas_teste()

    cy.get('#graph > svg > :nth-child(1) > :nth-child(2) > g > ellipse').click()
    cy.get('#delete').click()

    cy.get('#undo > img').click()
  })
});