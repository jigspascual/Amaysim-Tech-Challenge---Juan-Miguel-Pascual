class BuySimPage {
  constructor() {
    this.radioButton = 'input[name="simType"]';
    this.numberSwitcher = 'div[data-testid="number-transfer-switcher"]';
    this.checkOutButton = 'a[data-testid="product-checkout-button"]';
  }
  //Select SimPlan if USIM (Physical Sim) or ESIM (Electronic Sim)
  selectSimType(simType) {
    cy.get(this.radioButton, { timeout: 10000 }).check(simType, {
      force: true,
    });
  }
  isNumberSame(isRetained) {
    if (isRetained) {
      cy.get(this.numberSwitcher).find("input").check("yes", { force: true });
    } else {
      cy.get(this.numberSwitcher).find("input").check("no", { force: true });
    }
  }
  clickCheckoutButton() {
    cy.get(this.checkOutButton).should("be.visible").click();
  }
  fillInSimDetails(simType, isNumberChanged) {
    this.selectSimType(simType);
    this.isNumberSame(isNumberChanged);
    this.clickCheckoutButton();
  }
}
export default BuySimPage;
