class SimPlansPage {
  constructor() {
    this.dataPlanRows = ".plans-grid-row";
    this.dataPlanTitles = 'h3[class="h1"]';
    this.buyNowButton = ".btn.no-icon.btn-orange";
    this.planCards = ".plan-card-bottom";
    this.planDescription = "li";
  }
  buySimPlan(planType, optionIndex) {
    cy.get(this.planCards)
      .find(`${this.planDescription}:contains("${planType}")`)
      .parents(this.planCards)
      .find(`${this.buyNowButton}:contains("Buy"):visible`)
      .eq(optionIndex)
      .click();
  }
}
export default SimPlansPage;
