class SevenDaySimPlanPage{
    constructor(){
        this.planTitle = 'h3[class="h1"]'
        this.buyNowButton = '.btn.no-icon.btn-orange[href="/mobile/cart/7-day-10gb"]';
    }
    buyPlan(){
        cy.get(this.planTitle).should('have.text',"7 Day SIM Plans");
        cy.get(this.buyNowButton).should('be.visible').click();
    }
}
export default SevenDaySimPlanPage;