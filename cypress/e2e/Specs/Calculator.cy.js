import CalculatorPage from "../Pages/CalCulatorPage";
import HomePage from "../Pages/HomePage";


const home = new HomePage();
const calculator = new CalculatorPage();

describe("Verify saving calculator", () => {
  it("should open resource drop-down menu and click Saving calculator,then choose Messaging Api button cnd click continue button, then type '1' to the Local Numbers input and type '1' to the Toll-free Numbers and click continue button again", () => {
    home.launchWebApp();
    home.openCalculatorPage();
    calculator.chooseParams();
    calculator.validateSavingCalculator();
});

});
