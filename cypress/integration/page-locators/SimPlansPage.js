class SimPlansPage{
    constructor(){
        this.dataPlanRows = '.plans-grid-row';
        this.dataPlanTitles = 'h3[class="h1"]';
        this.buyNowButton = '.btn.no-icon.btn-orange'
        // updated
        this.planCards = '.plan-card-bottom';
    }
    selectSimPlan(simPlanIndex, valueType){
        cy.get(this.dataPlanRows)
          .eq(simPlanIndex)
          .scrollIntoView()
          .find(`${this.buyNowButton}:contains("Buy"):visible`)
          .eq(valueType)
          .click();
    }
    sampleSelectSim(){
        cy.get(this.planCards).find

    }
}
export default SimPlansPage