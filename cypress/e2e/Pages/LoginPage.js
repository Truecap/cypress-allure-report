const email = "testsne13@gmail.com";
const password = "Test1234test!";
const invalidEmail = "someemail@gmail.com";
const invalidPassword = "12345";

class LoginPage {
  get emailInput() {
    return cy.get('form>div>div input[name="email"]');
  }
  get passwordInput() {
    return cy.get('form>div>div input[name="password"]');
  }
  get submitButton() {
    return cy.get('button[class*="LoginForm__LoginButton"]');
  }
  get errorMessage() {
    return cy.get('[class*="ilxvtf"]');
  }

  logInInvalidEmail() {
    this.emailInput.type(invalidEmail);
    this.passwordInput.type(password);
    this.submitButton.click();
  }

  loginInvalidPassword() {
    this.emailInput.type(email);
    this.passwordInput.type(invalidPassword);
    this.submitButton.click();
  }
  validateLoginError() {
    this.errorMessage.should("be.visible");
  }
}
export default LoginPage;
