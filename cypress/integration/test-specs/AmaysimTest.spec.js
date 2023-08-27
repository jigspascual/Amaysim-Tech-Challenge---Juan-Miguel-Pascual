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
      myLandingPage.visitPage();
    });
  });
  it("Buys 7-day sim plan from dropdown", () => {
    myLandingPage.selectSimPlan(userDetails.simPlan);
    mySimPlansPage.buySimPlan(userDetails.simPlan, userDetails.simPlanOption);
    myBuySimPage.fillInSimDetails(
      userDetails.simType,
      userDetails.isKeepNumber
    );
    myDetailsPage.setDetails(userDetails.isUserExisting, userDetails);
    myPaymentsPage.isPageLoaded();
    myPaymentsPage.inputDetails(
      userDetails.cardNumber,
      userDetails.cardExpiry,
      userDetails.cardCVV
    );
    myDetailsPage.isErrorMsgDisplayed();
  });
  it("Buy 7-day sim plan from Sim Plans Page", () => {
    myLandingPage.clickSimPlans();
    mySimPlansPage.buySimPlan(userDetails.simPlan, userDetails.simPlanOption);
    myBuySimPage.fillInSimDetails(
      userDetails.simType,
      userDetails.isKeepNumber
    );
    myDetailsPage.setDetails(userDetails.isUserExisting, userDetails);
    myPaymentsPage.inputDetails(
      userDetails.cardNumber,
      userDetails.cardExpiry,
      userDetails.cardCVV
    );
    myDetailsPage.isErrorMsgDisplayed();
  });
});
