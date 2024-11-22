class DashboardPage{
  selectorsList(){
    const selectors = {
      newDiagram: "#btn-new",
      documentsButton: ":nth-child(2) > .text-white",
      existingDiagram: ".card-header",
      diagramDropdown: ".px-2 > .bi",
      sharingButton: ".card-header > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item",
      sharingEmailField: ".col-6 > .form-control",
      sharingOption: ".form-select",
      sendSharing: ".modal-footer > .bg-primary",
      shareByLinkButton: ".modal-footer > .text-primary",
      cancelSharing: "#ShareDiagramModal > .modal-dialog > .modal-content > .modal-header > #closeModal",
      iconFavorite: ".p-0 > img",
      userDropdown: "#dropdownMenuButton",
      updateUserButton: ":nth-child(1) > .dropdown-item",
      deleteUserButton: ":nth-child(3) > .dropdown-item",
      logoutButton: ":nth-child(4) > .dropdown-item",
      deleteUserPasswordField: "#password",
      deleteButton: ".modal-footer > .btn",
      modalDeleteUser: "#ConfirmRemoveLoginModal > .modal-dialog > .modal-content > .modal-body",
      confirmButton: ".d-flex > .btn-danger",
      cancelButton: ".modal-body > .d-flex > .btn-primary",
      feedbackMessage: ".swal2-popup",
      documentsField: "[id='documentsPage']"
    }
  
    return selectors
  }

  createNewDiagram(){
    cy.get(this.selectorsList().newDiagram).click()
  }

  accessDocumentsPage(){
    cy.get(this.selectorsList().documentsButton).click()
    cy.get(this.selectorsList().documentsField).should('exist')
  }

  accessExistingDiagram(){
    cy.get(this.selectorsList().existingDiagram).click()
  }

  logOut(){
    cy.get(this.selectorsList().userDropdown).click()
    cy.get(this.selectorsList().logoutButton).click()
  }

  updateUser(){
    cy.get(this.selectorsList().userDropdown).click()
    cy.get(this.selectorsList().updateUserButton).click()
  }

  deleteUser(){
    cy.get(this.selectorsList().userDropdown).click()
    cy.get(this.selectorsList().deleteUserButton).click()
    cy.get(this.selectorsList().deleteUserPasswordField).type(Cypress.env('USER_PASSWORD'))
    cy.get(this.selectorsList().deleteButton).click()
    cy.get(this.selectorsList().modalDeleteUser).should('be.visible')
    cy.get(this.selectorsList().confirmButton).click()
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Perfil removido com sucesso!')
  }

  cancelDeleteUser(){
    cy.get(this.selectorsList().userDropdown).click()
    cy.get(this.selectorsList().deleteUserButton).click()
    cy.get(this.selectorsList().deleteUserPasswordField).type(Cypress.env('USER_PASSWORD'))
    cy.get(this.selectorsList().deleteButton).click()
    cy.get(this.selectorsList().modalDeleteUser).should('be.visible')
    cy.get(this.selectorsList().cancelButton).click()
  }

  failDeleteUser(){
    cy.get(this.selectorsList().userDropdown).click()
    cy.get(this.selectorsList().deleteUserButton).click()
    cy.get(this.selectorsList().deleteUserPasswordField).type(Cypress.env('USER_WRONG_PASSWORD'))
    cy.get(this.selectorsList().deleteButton).click()
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'A senha digitada não corresponde a senha cadastrada!')
  }

  sharingDiagram(email){
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().sharingButton).click()
    cy.get(this.selectorsList().sharingEmailField).type(email)
    cy.get(this.selectorsList().sharingOption).select(1)
    cy.get(this.selectorsList().sendSharing).click()
  }

  shareByLink(){
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().sharingButton).click()
    cy.get(this.selectorsList().shareByLinkButton).click()
  }

  cancelShareByLink(){
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().diagramDropdown).click()
    cy.get(this.selectorsList().sharingButton).click()
    cy.get(this.selectorsList().cancelSharing).click()
  }

  favoriteDiagram(){
    cy.get(this.selectorsList().iconFavorite).click()
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama adicionado aos meus favoritos')
  }

}

export default DashboardPage