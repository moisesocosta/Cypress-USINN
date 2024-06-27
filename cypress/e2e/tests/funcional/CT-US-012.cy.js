describe('CT-US-012 | Listar diagramas compartilhados comigo', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-012', () => {
    cy.verificar_login(Cypress.env('USER_EMAIL'))
  })

  it('Cenário 01: Lista de Diagramas Gerada com Sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    //Acessa a página de "Compartilhados"
    cy.compartilhados_teste()
  })
});