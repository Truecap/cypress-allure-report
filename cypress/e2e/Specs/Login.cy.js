import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
const home = new HomePage();
const login = new LoginPage

describe("Negative Log In tests", () => {
  it("should login with invalid email", () => {
   home.launchWebApp();
   home.clickLogInButton();
   login.logInInvalidEmail();
   login.validateLoginError();
  });

  it("should login with invalid password", () => {
    home.launchWebApp();
    home.clickLogInButton();
    login.loginInvalidPassword();
    login.validateLoginError();
   });
});
