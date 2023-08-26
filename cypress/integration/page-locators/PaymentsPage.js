class PaymentsPage {
  constructor() {
    this.cardNumberField = 'input[aria-label="Credit or debit card number"]';
    this.cardExpiryDate =
      'input[aria-label="Credit or debit card expiration date"]';
    this.cardSecurityCode = 'input[aria-label="Credit or debit card CVC/CVV"]';
    this.paymentDetailsIframe =
      'iframe[title="Secure card number input frame"]';
    this.securityDetailsIframe =
      'iframe[title="Secure expiration date input frame"]';
    this.securityCodeDetailsIframe = 'iframe[title="Secure CVC input frame"]';
    this.confirmationCheckBox = 'input[type="checkbox"]';
    this.submitButton = 'a[data-testid="submit-button"]';
  }
  isPageLoaded() {
    cy.url().should("contain", "my-account");
  }
  inputDetails() {
    this.setCardNumber();
    this.setExpirationDate();
    this.setCVV();
    this.clickConfirmationBox();
    this.clickSubmitButton();
  }
  setCardNumber() {
    cy.iframe(this.paymentDetailsIframe)
      .find(this.cardNumberField)
      .type("4242 4242 4242 4242");
  }
  setExpirationDate() {
    cy.iframe(this.securityDetailsIframe)
      .find(this.cardExpiryDate)
      .type("0127");
  }
  setCVV() {
    cy.iframe(this.securityCodeDetailsIframe)
      .find(this.cardSecurityCode)
      .type("123");
  }
  clickConfirmationBox() {
    cy.get(this.confirmationCheckBox).click({ force: true });
  }
  clickSubmitButton() {
    cy.get(this.submitButton, { timeout: 10000 }).click();
  }
}
export default PaymentsPage;
