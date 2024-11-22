class UpdateProfilePage{
  selectorsList(){
    const selectors = {
      companyField: "#gray-area > .row > :nth-child(2) > .form-control",
      updateButton: ".px-sm-3 > .d-flex > :nth-child(2) > .btn",
      cancelButton: ".text-center > .text-decoration-none",
      successUpdateAlert: ".swal2-popup",
      dashboardField: "[id='dashboard']"
    }
  
    return selectors
  }

  updateCompany(){
    cy.get(this.selectorsList().companyField).clear().type('Google')
    cy.get(this.selectorsList().updateButton).click()
    cy.get(this.selectorsList().successUpdateAlert).should('contain', 'Os dados foram atualizados com sucesso!')
  }

  updateCanceled(){
    cy.get(this.selectorsList().companyField).clear().type('Google')
    cy.get(this.selectorsList().updateButton).click()
    cy.get(this.selectorsList().cancelButton).click()
    cy.get(this.selectorsList().dashboardField).should('exist')
  }
  
}

export default UpdateProfilePage