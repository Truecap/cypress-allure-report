import ContactCenterPage from "../Pages/ContactCenterPage";
import HomePage from "../Pages/HomePage";

const home = new HomePage();
const contactCenter = new ContactCenterPage();

describe("Verify clickability buttons", () => {
  it("should open solutions drop-down menu and click contack center button, then click phone calss button and go back, then click text messages button and go back. and click browser-based comms button", () => {
    home.launchWebApp();
    home.openContactCenterPage();
    contactCenter.clickPhoneCallsBtn();
    contactCenter.validatePhoneCallsButton();
    contactCenter.clickMessagesBtn();
    contactCenter.validateTextMessagesButton();
    contactCenter.clickBrowserBasedBtn();
    contactCenter.validateBassedCommsButton();
  });
});
