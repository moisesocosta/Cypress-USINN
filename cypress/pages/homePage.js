class HomePage{
  selectorsList(){
    const selectors = {
      loginButton: ":nth-child(2) > .style_btn__TeoeO"
    }
  
    return selectors
  }

  accessLoginPage(){
    cy.get(this.selectorsList().loginButton).click()
  }
}

export default HomePage