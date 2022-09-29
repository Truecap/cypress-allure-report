import HomePage from "../Pages/HomePage";
import MessagingPage from "../Pages/MessagingPage";

const home = new HomePage();
const messaging = new MessagingPage();

describe("Find price for sms api for Ukraine in usd and euro", () => {
  it("should open pricing drop-down menu and click SMS Api button, then choose Ukraine from drop-down and find cost in usd", () => {
    home.launchWebApp();
    home.openMessagingPage();
    messaging.chooseUkraine();
    messaging.validatePriceForUsd();
  });

  it("should open pricing drop-down menu and click SMS Api button, then choose Ukraine from drop-down and chosse euro from currency drop-down and find cost in euro", () => {
    home.launchWebApp();
    home.openMessagingPage();
    messaging.chooseUkraine();
    messaging.chooseEuro();
    messaging.validatePriceForEuro();
  });
});
