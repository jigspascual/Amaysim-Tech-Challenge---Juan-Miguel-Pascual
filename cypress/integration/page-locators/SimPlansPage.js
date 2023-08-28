class SimPlansPage {
  constructor() {
    this.buyNowButton = ".btn.no-icon.btn-orange";
    this.planCards = ".product-card-bottom";
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
