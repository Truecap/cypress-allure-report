import HomePage from "../Pages/HomePage";

const home = new HomePage();

describe("Verify home page button", () => {
  it("should click about u button and than click home page button", () => {
    home.launchWebApp();
    home.openAboutUsPage();
    home.clickHomePageBtn();
    home.validateHomePageButton();
  });
});
