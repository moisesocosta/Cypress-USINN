describe('CT-US-019 | Acessar um diagrama compartilhado comigo', function(){
  describe('Cenário 01: Acesso ao diagrama compartilhado realizado com sucesso', () => {
    context('Dado que recebi o link do diagrama compartilhado', () => {
      beforeEach(() => {
        //Acessa a página de "Cadastro"
        cy.visit('https://usinnmodeler.vercel.app/login')
        //Faz o login
        cy.login_teste(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        //Acessa a página de "Documentos"
        cy.documentos_teste()
      })
  
      context('Quando acesso o link do diagrama', () => {
        beforeEach(() => {

        })

        it('Então sou redirecionado para o diagrama, o acesso é liberado e sou autorizado a editar ou ler de acordo com o tipo do link de compartilhamento.', () => {

        })
      })
    })
  })
});