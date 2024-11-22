class RegistrationPage{
  selectorsList(){
    const selectors = {
      nameField: "[name='name']",
      emailField: "[name='email']",
      passwordField: "[name='password']",
      birthdayField: "[name='birthday']",
      roleField: "[name='role']",
      genderField: "[name='gender']",
      companyField: "[name='company']",
      checkboxButton: "[type='checkbox']",
      submitButton: "[type='submit']",
      successCredentialAlert: ".swal2-popup",
      wrongCredentialAlert: ".invalid-feedback",
      loginPageButton: ".text-reset"
    }

    return selectors
  }

  accessRegistrationPage(){
    cy.visit(`${Cypress.env('BASE_URL2')}/cadastro`)
  }

  registrationSomeCredentials(name, birthday, role){
    cy.get(this.selectorsList().nameField).type(name)
    cy.get(this.selectorsList().birthdayField).type(birthday)
    cy.get(this.selectorsList().roleField).select(role)
  }

  registrationSuccess(email, password, gender, company){
    cy.get(this.selectorsList().emailField).type(email)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().genderField).select(gender)
    cy.get(this.selectorsList().companyField).type(company)
    cy.get(this.selectorsList().checkboxButton).click()
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().successCredentialAlert).should('contain', 'Cadastro realizado com sucesso')
  }

  registrationWithEmailInvalid(emailInvalid){
    cy.get(this.selectorsList().emailField).type(emailInvalid)
    cy.get(this.selectorsList().checkboxButton).click()
    cy.get(this.selectorsList().wrongCredentialAlert).should('contain', 'Endereço de e-mail inválido')
  }

  registrationWithPasswordInvalid(email, passwordInvalid){
    cy.get(this.selectorsList().emailField).type(email)
    cy.get(this.selectorsList().passwordField).type(passwordInvalid)
    cy.get(this.selectorsList().checkboxButton).click()
    cy.get(this.selectorsList().wrongCredentialAlert).should('contain', 'Senha deve ter no mínimo 8 caracteres')
  }

  goBackToLoginPage(){
    cy.get(this.selectorsList().loginPageButton).click()
  }

  newRegistration(name, birthday, role, email, password, gender, company){
    this.accessRegistrationPage()
    this.registrationSomeCredentials(name, birthday, role)
    this.registrationSuccess(email, password, gender, company)
  }
}

export default RegistrationPage