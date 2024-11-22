class LoginPage{
  selectorsList(){
    const selectors = {
      emailField: "input[type='email']",
      passwordField: "input[type='password']",
      submitButton: "[type='submit']",
      dashboardField: "[id='dashboard']",
      feedbackMessage: ".swal2-popup"
    }

    return selectors
  }
  accessLoginPage(){
    cy.visit(`${Cypress.env('BASE_URL2')}/login`)
  }

  loginSuccess(email, password){
    cy.get(this.selectorsList().emailField).type(email)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().submitButton).click()
    cy.get('[id="dashboard"]').should('exist')
  }

  loginWithEmailInvalid(emailInvalid, password){
    cy.get(this.selectorsList().emailField).type(emailInvalid)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().dashboardField).should('not.exist')
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'E-mail ou senha inválidos')
  }

  loginWithPasswordInvalid(email, passwordInvalid){
    cy.get(this.selectorsList().emailField).type(email)
    cy.get(this.selectorsList().passwordField).type(passwordInvalid)
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().dashboardField).should('not.exist')
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'E-mail ou senha inválidos')
  }

  loginInvalid(emailInvalid, passwordInvalid){
    cy.get(this.selectorsList().emailField).type(emailInvalid)
    cy.get(this.selectorsList().passwordField).type(passwordInvalid)
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().dashboardField).should('not.exist')
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'E-mail ou senha inválidos')
  }

  loginWithDomainInvalid(emailDomainInvalid, password){
    cy.get(this.selectorsList().emailField).type(emailDomainInvalid)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().dashboardField).should('not.exist')
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'E-mail ou senha inválidos')
  }

  loginWithDomainAndPasswordInvalid(emailDomainInvalid, passwordInvalid){
    cy.get(this.selectorsList().emailField).type(emailDomainInvalid)
    cy.get(this.selectorsList().passwordField).type(passwordInvalid)
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().dashboardField).should('not.exist')
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'E-mail ou senha inválidos')
  }
}

export default LoginPage