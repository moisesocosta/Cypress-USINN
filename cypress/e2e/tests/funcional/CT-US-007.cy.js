describe('CT-US-007 | Sair do sistema', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit(`${Cypress.env('BASE_URL')}/login`)
  })

  it('Preparo do CT-US-007', () => {
    cy.verificar_login(Cypress.env('USER_EMAIL'))
  })

  it('Cenário 01: Sair da ferramenta com sucesso na homepage', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
        
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('h1').should('exist')
  })

  it('Cenário 02: Sair do sistema com alterações não salvas no diagrama', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()
    cy.get('#dropdownMenuButton').click()
        
    cy.get(':nth-child(4) > .dropdown-item').click()
  })

  it('Cenário 03: Sair do sistema com alterações não salvas no diagrama', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
    //Acessa a página de "Documentos"
    cy.documentos_teste()
  
    //Adiciona uma alteração no diagrama
    cy.alterarDiagramas_teste()
    cy.get('#dropdownMenuButton').click()
        
    cy.get(':nth-child(4) > .dropdown-item').click()
  })
});