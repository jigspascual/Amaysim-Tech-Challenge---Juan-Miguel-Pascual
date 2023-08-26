class SimPlansPage {
    constructor() {
      this.dataPlanRows = ".plans-grid-row";
      this.dataPlanTitles = 'h3[class="h1"]';
      this.buyNowButton = ".btn.no-icon.btn-orange";
      this.planCards = ".plan-card-bottom";
      this.planDescription = 'li'
    }
    /*
    selectSimPlan(simPlanIndex, valueType) {
      cy.get(this.dataPlanRows)
        .eq(simPlanIndex)
        .scrollIntoView()
        .find(`${this.buyNowButton}:contains("Buy"):visible`)
        .eq(valueType)
        .click();
    }
    sampleSelectSim(planType,planOption) {
      cy.get(this.planCards)
        .find("li > b")
        .filter(`:contains("${planType}")`)
        .as("criteria")
        .then(($el) => {
          if ($el.text().includes(planType)) {
            cy.get("@criteria")
              .parents(this.planCards)
              .find(`${this.buyNowButton}:contains("Buy"):visible`)
              .eq(planOption)
              .click();
          }
        });
    }
    */
    buySimPlan(planType, planOption) {
      cy.get(this.planCards)
        .find(`${this.planDescription}:contains("${planType}")`)
        .parents(this.planCards)
        .find(`${this.buyNowButton}:contains("Buy"):visible`)
        .eq(planOption)
        .click();
    }
   
  }
  export default SimPlansPage;