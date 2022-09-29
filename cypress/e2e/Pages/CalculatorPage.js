import HomePage from "../Pages/HomePage";
const home = new HomePage();

class CalculatorPage {
  get messagingApiBtn() {
    return cy.xpath("//*[text() ='Messaging API']");
  }
  get continueButton() {
    return cy.get("main div>button.hBNXWZ");
  }
  get localNumbersInput() {
    return cy.get("#local-numbers");
  }
  get tollFreeNumbersInput() {
    return cy.get("#toll-free-numbers");
  }
  get possibleSavingsImg() {
    return cy.get(".NYGAb");
  }

  chooseParams() {
    home.homePageBtn.realHover({ position: "bottomLeft" });
    this.messagingApiBtn.click();
    this.continueButton.click();
    this.localNumbersInput.clear().type("01");
    this.tollFreeNumbersInput.clear().type("01");
    this.continueButton.click();
  }
  validateSavingCalculator() {
    this.possibleSavingsImg.should("be.visible").and("contain.text", "$7,662");
  }
}
export default CalculatorPage;
