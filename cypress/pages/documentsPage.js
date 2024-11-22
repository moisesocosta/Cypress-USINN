class DocumentsPage{
  selectorsList(){
    const selectors = {
      favoriteDiagramsButton: ":nth-child(2) > .text-dark",
      sharedDiagramsButton: ":nth-child(3) > .text-dark",
      dropdownDiagram: ":nth-child(1) > #diagram-card > .card-header > .dropdown > .px-2 > .bi",
      deleteDiagram: ":nth-child(1) > #diagram-card > .card-header > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item",
      modalDeleteDiagram: "#RemoveDiagramModal > .modal-dialog > .modal-content > .modal-body",
      confirmButton: ".modal-body > .btn-primary",
      cancelButton: ".modal-body > .btn-light",
      feedbackMessage: ".swal2-popup"
    }
  
    return selectors
  }

  accessSharedDiagramsPage(){
    cy.get(this.selectorsList().sharedDiagramsButton).click()
  }

  accessFavoriteDiagramsPage(){
    cy.get(this.selectorsList().favoriteDiagramsButton).click()
  }

  deleteDiagram(){
    cy.get(this.selectorsList().dropdownDiagram).click()
    cy.get(this.selectorsList().deleteDiagram).click()
    cy.get(this.selectorsList().modalDeleteDiagram).should('exist')
    cy.get(this.selectorsList().confirmButton).click()
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'O Diagrama foi excluído com sucesso')
  }

  cancelDeleteDiagram(){
    cy.get(this.selectorsList().dropdownDiagram).click()
    cy.get(this.selectorsList().deleteDiagram).click()
    cy.get(this.selectorsList().modalDeleteDiagram).should('exist')
    cy.get(this.selectorsList().cancelButton).click()
  }
}

export default DocumentsPage