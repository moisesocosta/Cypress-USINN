describe('Realizar requisição de Login e Cadastro via API', function(){
  it('Realizar requisição de Login', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:8080',
      body: {
        name: 'test',
        email: 'anna123@gmail.com',
        password: '12345678'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(404)
    })
  })

  it('Realizar requisição de Cadastro', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:8080',
      body: {
        name: 'test',
        email: 'anna123@gmail.com',
        password: '12345678',
        company: 'ufc',
        office: 'estudante'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(404)
    })
  })
});