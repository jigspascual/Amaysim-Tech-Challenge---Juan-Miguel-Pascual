import LandingPage from "../page-locators/LandingPage";
import SimPlansPage from "../page-locators/SimPlansPage";
import BuySimPage from "../page-locators/BuySimPage";
import DetailsPage from "../page-locators/DetailsPage";
import PaymentsPage from "../page-locators/PaymentsPage";
describe("Validate that error message is displayed when card payment is invalid", () => {
  const myLandingPage = new LandingPage();
  const mySimPlansPage = new SimPlansPage();
  const myBuySimPage = new BuySimPage();
  const myDetailsPage = new DetailsPage();
  const myPaymentsPage = new PaymentsPage();
  it("Buys 7-day sim plan from dropdown", () => {
    cy.visit("https://www.amaysim.com.au/");
    myLandingPage.selectSimPlan("7 day");
    mySimPlansPage.buySimPlan("7 day", 0);
    myBuySimPage.fillInDetails("USIM", "no");
    myDetailsPage.setDetails(
      false,
      "Jigs",
      "Pascual",
      "12101992",
      "jigspascual@sample.com",
      "jigspascual",
      "mypassword245",
      false,
      "Level 6, 17-19 Bridge St, SYDNEY NSW 2000",
      "Level 6, 17-19 Bridge St, SYDNEY NSW 2000",
      true
    );
    myPaymentsPage.isPageLoaded();
    myPaymentsPage.inputDetails();
    myDetailsPage.isErrorMsgDisplayed();
  });
  it.only("Buy sim plans from Sim Plans Page", () => {
    cy.visit("https://www.amaysim.com.au/");
    myLandingPage.clickSimPlans();
    mySimPlansPage.buySimPlan("7 day", 0);
    myBuySimPage.fillInDetails("USIM", "no");
    myDetailsPage.setDetails(
      false,
      "Jigs",
      "Pascual",
      "12101992",
      "jigspascual@sample.com",
      "jigspascual",
      "mypassword245",
      false,
      "Level 6, 17-19 Bridge St, SYDNEY NSW 2000",
      "Level 6, 17-19 Bridge St, SYDNEY NSW 2000",
      true
    );
    myPaymentsPage.isPageLoaded();
    myPaymentsPage.inputDetails();
    myDetailsPage.isErrorMsgDisplayed();
  });
});
