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
  let userDetails;
  beforeEach(function () {
    cy.fixture("userDetails.json").then((data) => {
      userDetails = data;
      cy.visit("https://www.amaysim.com.au/");
    });
  });
  it("Buys 7-day sim plan from dropdown", () => {
    myLandingPage.selectSimPlan("7 day");
    mySimPlansPage.buySimPlan("7 day", 0);
    myBuySimPage.fillInSimDetails("USIM", false);
    myDetailsPage.setDetails(false, userDetails);
    myPaymentsPage.isPageLoaded();
    myPaymentsPage.inputDetails();
    myDetailsPage.isErrorMsgDisplayed();
  });
  it("Buy 7-day sim plan from Sim Plans Page", () => {
    cy.visit("https://www.amaysim.com.au/");
    myLandingPage.clickSimPlans();
    mySimPlansPage.buySimPlan("7 day", 0);
    myBuySimPage.fillInSimDetails("USIM", false);
    myDetailsPage.setDetails(false, userDetails);
    myPaymentsPage.isPageLoaded();
    myPaymentsPage.inputDetails();
    myDetailsPage.isErrorMsgDisplayed();
  });
});
