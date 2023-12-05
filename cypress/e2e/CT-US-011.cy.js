const credentials = require('../fixtures/credentials.json')

describe('CT-US-011 | Listar meus diagramas', function(){
  beforeEach(() => {
    //Acessa a página de "Login"
    cy.visit('https://usinnmodeler.vercel.app/login')
  })

  it('SUCESSO - Listar meus diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    //Acessa a página de "Documentos"
    cy.documentos_teste()
  })

  it.only('FALHA(Falha na conexão) - Listar meus diagramas', () => {
    //Faz o login
    cy.login_teste(credentials.email, credentials.password)

    cy.intercept({
      method: 'GET',
      url: 'https://usinnmodeler.vercel.app/dashboard',
    }, (req) => {
      console.log('Interceptando a solicitação...');
      req.continue((res) => {
        res.statusCode = 500;
      });
    }).as('failRequest');

    //Acessa a página de "Documentos"
    cy.documentos_teste()

    cy.wait('@failRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(500);
    });

  })
});