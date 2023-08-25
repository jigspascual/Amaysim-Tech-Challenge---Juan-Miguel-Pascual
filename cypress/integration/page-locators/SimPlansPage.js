class SimPlansPage{
    constructor(){
        this.dataPlanRows = '.plans-grid-row';
        this.dataPlanTitles = 'h3[class="h1"]';
        this.buyNowButton = '.btn.no-icon.btn-orange'
        
    }
    selectSimPlan(simPlanIndex, valueType){
        cy.get(this.dataPlanRows)
          .eq(simPlanIndex)
          .scrollIntoView()
          .find(`${this.buyNowButton}:contains("Buy"):visible`)
          .eq(valueType)
          .click();
    }
}
export default SimPlansPage