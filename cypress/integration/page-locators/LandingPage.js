class LandingPage{
    constructor()
    {
        this.simPlans = 'a[aria-label="SIM plans"]';
        this.planDropdown = '.nav-dropdown-list';
    }
    selectSimPlan(planType){
        cy.get(this.simPlans).trigger('mouseenter');
        cy.get(this.planDropdown).should('be.visible').find('li').contains(planType).click();        
    }
}
export default LandingPage