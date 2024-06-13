describe('CT-US-008 | Atualizar perfil', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
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

  it('Cenário 02: Falha no atualizar perfil', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        
    cy.get('#gray-area > .row > :nth-child(2) > .form-control').clear().type('estudante')

    cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
    cy.get('.swal2-popup').should('contain', 'Erro ao atualizar os dados')
  })

  it('Cenário 03: Falha no atualizar perfil', () => {
    //Faz o login
    cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  
    //Acessa a página de "Documentos"
    cy.documentos_teste()
    cy.get('#dropdownMenuButton').click()
    cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(1)').click()
        
    cy.get('.px-sm-3 > :nth-child(2) > .form-control').clear().type(Cypress.env('USER_EMAIL_WITHOUT_DOMAIN'))

    cy.get('form.row > .d-flex > :nth-child(2) > .btn').click({force: true})
    cy.get('.invalid-feedback').should('contain', 'Endereço de e-mail inválido')
    
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