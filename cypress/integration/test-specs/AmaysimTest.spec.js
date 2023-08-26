import LandingPage from "../page-locators/LandingPage";
import SevenDaySimPlanPage from "../page-locators/SevenDaySimPlanPage";
import SimPlansPage from "../page-locators/SimPlansPage";
import BuySimPage from "../page-locators/BuySimPage";
import DetailsPage from "../page-locators/DetailsPage";
describe('Sample', () =>{
    const myLandingPage = new LandingPage();
    const mySimPlansPage = new SimPlansPage();
    const myBuySimPage = new BuySimPage();
    const myDetailsPage = new DetailsPage();
    it('Sample', () =>{
        cy.visit('https://www.amaysim.com.au/');
        //myLandingPage.selectSimPlan2();
        myLandingPage.selectSimPlan("Data plans");
        mySimPlansPage.buySimPlan("Data only",1);
        myBuySimPage.fillInDetails("USIM","no");
        myDetailsPage.setDetails(false,"Jigs","Pascual","12101992","jigspascual@sample.com","jigspascual","mypassword245",false,"Level 6, 17-19 Bridge St, SYDNEY NSW 2000","Level 6, 17-19 Bridge St, SYDNEY NSW 2000",true);
    })
})
