describe('CT-US-012 | Listar diagramas compartilhados comigo', function(){
  beforeEach(() => {
    //Acessa a página de "Cadastro"
    cy.visit('https://usinnmodeler.vercel.app/login')
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