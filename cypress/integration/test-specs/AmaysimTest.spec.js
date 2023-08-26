import LandingPage from "../page-locators/LandingPage";
import SevenDaySimPlanPage from "../page-locators/SevenDaySimPlanPage";
import SimPlansPage from "../page-locators/SimPlansPage";
describe('Sample', () =>{
    const myLandingPage = new LandingPage();
    const mySimPlansPage = new SimPlansPage();
    const mySevenDaySimPlanPage = new SevenDaySimPlanPage();
    it('Sample', () =>{
        cy.visit('https://www.amaysim.com.au/');
        //myLandingPage.selectSimPlan2();
        myLandingPage.selectSimPlan("Data plans");
        mySimPlansPage.buySimPlan("Data only",1);
    })
})
