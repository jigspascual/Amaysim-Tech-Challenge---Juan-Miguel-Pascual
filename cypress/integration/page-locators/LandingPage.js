class LandingPage {
  constructor() {
    this.simPlans = 'a[aria-label="SIM plans"]';
    this.planDropdown = ".nav-dropdown-list";
  }
  visitPage() {
    cy.visit(Cypress.config("baseUrl"));
  }
  selectSimPlan(planType) {
    cy.get(this.simPlans).trigger("mouseenter");
    cy.get(this.planDropdown)
      .should("be.visible")
      .find("li")
      .contains(planType)
      .click();
    cy.url().should("contain", "/sim-plans");
  }
  clickSimPlans() {
    cy.get(this.simPlans).click();
    cy.url().should("contain", "/sim-plans");
  }
}
export default LandingPage;
