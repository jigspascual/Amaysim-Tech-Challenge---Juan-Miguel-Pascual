import LandingPage from "../page-locators/LandingPage";
import SimPlansPage from "../page-locators/SimPlansPage";
describe('Sample', () =>{
    const myLandingPage = new LandingPage();
    const mySimPlansPage = new SimPlansPage();
    it('Sample', () =>{
        cy.visit('https://www.amaysim.com.au/');
        myLandingPage.selectSimPlan();
        mySimPlansPage.selectSimPlan(1,2);
    })
})
