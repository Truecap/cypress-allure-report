import HomePage from "../Pages/HomePage";
const home = new HomePage();

describe("Verify tabs on home page without login", () => {
  it("should hover on Company tab and open drop-down menu", () => {
    home.launchWebApp();
    home.openCompanyTab();
    home.validateOpenDrpDwnCompanyTab();
  });
  it("should hover on Pricing tab and open drop-down menu", () => {
    home.launchWebApp();
    home.openPicingTab();
    home.validateOpenDrpDwnPricingTab();
  });
  it("should hover on Products tab and open drop-down menu", () => {
    home.launchWebApp();
    home.openProductsTab();
    home.validateOpenDrpDwnProductsTab();
  });
  it("should hover on Solution tab and open drop-down menu", () => {
    home.launchWebApp();
    home.openSolutionsTab();
    home.validateOpenDrpDwnSolutionsTab();
  });
  it("should hover on Resource tab and open drop-down menu", () => {
    home.launchWebApp();
    home.openResourcesTab();
    home.validateOpenDrpDwnRecourcesTab();
  });
  it("should click on RNetwork tab and redirect to network page", () => {
    home.launchWebApp();
    home.clickNetworkTab();
    home.validateOpenDrpDwnNetworkTab();
  });
});
