class LandingPage{
    constructor()
    {
        this.simPlans = 'a[aria-label="SIM plans"]';
    }
    selectSimPlan(){
        cy.get(this.simPlans).click();
        
    }
}
export default LandingPage