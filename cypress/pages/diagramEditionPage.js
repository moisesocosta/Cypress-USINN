class DiagramEditionPage{
  selectorsList(){
    const selectors = {
      undoButton: "#undo",
      redoButton: "#redo > img",
      saveButton: "#save > .h6",
      iconHomePage: "a > .me-4",
      section1Dropdown: "#Section1 > .ExpandButtons > .border-0",
      openingPoint: "[src='/images/pontoDeAbertura.GIF']",
      creationPlan: "#graph > svg",
      userDropdown: "#dropdownMenuButton",
      logoutButton: ":nth-child(4) > .dropdown-item",
      exportButton: ".order-last > .h6",
      exportDropdown: ".input-group > .form-select",
      cancelExportButton: "#exportModalId > .modal-dialog > .modal-content > .modal-header > #closeModal",
      feedbackMessage: ".swal2-popup"
    }
  
    return selectors
  }

  undoChanges(){
    cy.get(this.selectorsList().undoButton).click()
  }

  redoChanges(){
    cy.get(this.selectorsList().redoButton).click()
  }

  saveChanges(){
    cy.get(this.selectorsList().saveButton).click()
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama salvo com sucesso!')
  }

  returnHomePage(){
    cy.get(this.selectorsList().iconHomePage).click()
  }

  makeChangesOnDiagram(){
    cy.get(this.selectorsList().section1Dropdown).click()
    cy.get(this.selectorsList().openingPoint).click()
    cy.get(this.selectorsList().creationPlan).then(($elements) => {
      const randomIndex = Math.floor(Math.random() * $elements.length); // Gera um índice aleatório
      cy.wrap($elements[randomIndex]).click(); // Clica no elemento selecionado
    })
  }

  logOut(){
    cy.get(this.selectorsList().userDropdown).click()
    cy.get(this.selectorsList().logoutButton).click()
  }

  exportDiagramPNG(){
    cy.get(this.selectorsList().exportButton).click()
    cy.get(this.selectorsList().exportDropdown).select(1)
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama exportado com sucesso!')
  }

  exportDiagramJPEG(){
    cy.get(this.selectorsList().exportButton).click()
    cy.get(this.selectorsList().exportDropdown).select(2)
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama exportado com sucesso!')
  }

  exportDiagramWEBP(){
    cy.get(this.selectorsList().exportButton).click()
    cy.get(this.selectorsList().exportDropdown).select(3)
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama exportado com sucesso!')
  }

  exportDiagramPDF(){
    cy.get(this.selectorsList().exportButton).click()
    cy.get(this.selectorsList().exportDropdown).select(4)
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama exportado com sucesso!')
  }

  exportDiagramSVG(){
    cy.get(this.selectorsList().exportButton).click()
    cy.get(this.selectorsList().exportDropdown).select(5)
    cy.get(this.selectorsList().feedbackMessage).should('contain', 'Diagrama exportado com sucesso!')
  }

  cancelExportDiagram(){
    cy.get(this.selectorsList().exportButton).click()
    cy.get(this.selectorsList().cancelExportButton).click()
  }
}

export default DiagramEditionPage