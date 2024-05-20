describe('CT-US-007 | Sair do sistema', function(){
  describe.only('Cenário 01: Sair da ferramenta com sucesso na homepage', () => {
    context('Dado que estou na homepage da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Acessa a página de "Documentos"
          cy.documentos_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção Sair', () => {
          beforeEach(() => {
            cy.get('.container-fluid > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
          })
          
          it('Então não tenho mais acesso ao sistema', () => {
            cy.get('#Titulo').should('exist')
          })
        })
      })
    })
  })

  describe('Cenário 02: Sair do sistema com alterações não salvas no diagrama', () => {
    context('Dado que estou na página de edição de diagramas da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Adiciona uma alteração no diagrama
          cy.alterarDiagramas_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção Sair', () => {
          beforeEach(() => {
            cy.get(':nth-child(4) > .dropdown-item').click()
          })
          
          context('E clico em “Sim” e o sistema salva as alterações não salvas no diagrama', () => {
            beforeEach(() => {

            })
            
            it('Então não tenho mais acesso ao sistema', () => {

            })
          })
        })
      })
    })
  })

  describe('Cenário 03: Sair do sistema com alterações não salvas no diagrama', () => {
    context('Dado que estou na página de edição de diagramas da USINN Modeler', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando clico no ícone de perfil do Usuário', () => {
        beforeEach(() => {
          //Adiciona uma alteração no diagrama
          cy.alterarDiagramas_teste()
          cy.get('#dropdownMenuButton').click()
        })
        
        context('E clico na opção Sair', () => {
          beforeEach(() => {
            cy.get(':nth-child(4) > .dropdown-item').click()
          })
          
          context('E clico em “Não” e o sistema não salva as alterações realizadas no diagrama', () => {
            beforeEach(() => {

            })
            
            it('Então não tenho mais acesso ao sistema', () => {

            })
          })
        })
      })
    })
  })
});