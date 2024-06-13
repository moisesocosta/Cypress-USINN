describe('CT-US-008 | Atualizar perfil', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('http://localhost:3000/login')
  })

  it('Cenário 01: Atualizar perfil com Sucesso', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')

    cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
    cy.get('.swal2-popup').should('contain', 'Os dados foram atualizados com sucesso!')
  })

  it('Cenário 02: Falha no atualizar perfil ', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')

    cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})

  })

  it('Cenário 03: Falha no atualizar perfil', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')

    cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
    
  })

  it('Cenário 04: Cancelar o atualizar perfil', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')

    cy.get('.text-center > .text-decoration-none').click({force: true})
    cy.get('[id="dashboard"]').should('exist')
  })
});