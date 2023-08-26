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
  inputDetails(cardNumber, cardExpiry, cardCVV) {
    this.setCardDetail(
      this.paymentDetailsIframe,
      this.cardNumberField,
      cardNumber
    );
    this.setCardDetail(
      this.securityDetailsIframe,
      this.cardExpiryDate,
      cardExpiry
    );
    this.setCardDetail(
      this.securityCodeDetailsIframe,
      this.cardSecurityCode,
      cardCVV
    );
    this.clickConfirmationBox();
    this.clickSubmitButton();
  }
  setCardDetail(iframeLocator, locator, value) {
    cy.iframe(iframeLocator).find(locator).type(value);
  }
  clickConfirmationBox() {
    cy.get(this.confirmationCheckBox).click({ force: true });
  }
  clickSubmitButton() {
    cy.get(this.submitButton, { timeout: 10000 }).click();
  }
}
export default PaymentsPage;
