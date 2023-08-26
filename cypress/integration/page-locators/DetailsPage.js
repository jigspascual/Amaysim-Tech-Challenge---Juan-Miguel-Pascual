class DetailsPage {
  constructor() {
    this.userType = 'input[name="isExistingUser"]';
    this.userFirstNameField = 'input[name="firstName"]';
    this.userLastNameField = 'input[name="lastName"]';
    this.birthDateField = 'input[name="dateOfBirth"]';
    this.emailField = 'input[name="email"]';
    this.userNameField = 'input[name="username"]';
    this.passwordField = 'input[name="password"]';
    this.contactNumberField = 'input[name="contactNumber"]';
    this.homeAddressField = 'div[role="combobox"] > input';
    this.deliveryAddress = 'div[role="combobox"] > input';
    this.deliveryOption = 'input[name="deliveryAddressIsHomeAddress"]';
    this.autoCompleteOptions = 'ul[role="listbox"]';
    this.termsAndConditionsCheckBox = 'input[name="acceptTermsAndConditions"]';
    this.creditPaymentType = 'input[data-payment-type="CREDIT_CARDS"]';
    this.paypalPaymentType = 'input[data-payment-type="PAYPAL"]';
    this.continueToPaymentButton = 'button[value="continue"]';
    this.loginButton = 'button[data-testid="login-button"]';
    this.errorMsg = "span > strong";
  }
  isUserNew(isExistingUser) {
    if (isExistingUser) {
      cy.get(this.userType).check("yes", { force: true });
    } else {
      cy.get(this.userType).check("no", { force: true });
    }
  }
  isDeliverySame(isDeliveryAddressSame) {
    if (!isDeliveryAddressSame) {
      cy.get(this.deliveryOption).click({ force: true });
    }
  }
  isPaymentCredit(isPaymentCreditCard) {
    if (isPaymentCreditCard) {
      cy.get(this.creditPaymentType).check("CREDIT_CARDS", { force: true });
    } else {
      cy.get(this.paypalPaymentType).check("PAYPAL", { force: true });
    }
  }
  typeAndAssertValue(selector, value) {
    cy.get(selector).type(value).should("have.value", value);
  }
  setNumber() {
    cy.get(this.contactNumberField).type(
      "04" + Math.random().toString().slice(2, 10)
    );
  }
  setHomeAddress(userAddress) {
    cy.get(this.homeAddressField).eq(0).type(userAddress);
    cy.get(this.autoCompleteOptions)
      .should("be.visible")
      .find("span")
      .eq(0)
      .click();
  }
  setDeliveryAddress(deliveryAddress) {
    cy.get(this.deliveryAddress).eq(1).type(deliveryAddress);
    cy.get(this.autoCompleteOptions)
      .should("be.visible")
      .find("span")
      .eq(0)
      .click();
  }
  setUsername(username) {
    cy.get(this.userNameField).type(username);
  }
  clickTermsAndCondition() {
    cy.get(this.termsAndConditionsCheckBox).click({ force: true });
  }
  clickContinueButton() {
    cy.get(this.continueToPaymentButton).should("be.enabled").click();
  }
  clickLoginButton() {
    cy.get(this.loginButton).click({ force: true });
  }
  setExistingUserDetails(username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.clickLoginButton();
  }
  setNewUserDetails(userDetails) {
    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
      isDeliveryAddressSame,
      homeAddress,
      deliveryAddress,
      isPaymentCreditCard,
    } = userDetails;
    this.typeAndAssertValue(this.userFirstNameField, firstName);
    this.typeAndAssertValue(this.userLastNameField, lastName);
    this.typeAndAssertValue(this.birthDateField, dateOfBirth);
    this.typeAndAssertValue(this.emailField, email);
    this.typeAndAssertValue(this.passwordField, password);
    this.setNumber();
    this.isDeliverySame(isDeliveryAddressSame);
    this.setHomeAddress(homeAddress);
    if (!isDeliveryAddressSame) {
      this.setDeliveryAddress(deliveryAddress);
    }
    this.isPaymentCredit(isPaymentCreditCard);
    this.clickTermsAndCondition();
    this.clickContinueButton();
  }
  setDetails(
    isExistingUser,
    firstName,
    lastName,
    dateOfBirth,
    email,
    username,
    password,
    isDeliveryAddressSame,
    homeAddress,
    deliveryAddress,
    isPaymentCreditCard
  ) {
    this.isUserNew(isExistingUser);
    if (isExistingUser) {
      this.setExistingUserDetails(username, password);
    } else if (!isExistingUser) {
      this.setNewUserDetails(
        firstName,
        lastName,
        dateOfBirth,
        email,
        password,
        isDeliveryAddressSame,
        homeAddress,
        deliveryAddress,
        isPaymentCreditCard
      );
    }
  }
  isErrorMsgDisplayed() {
    cy.get(this.errorMsg)
      .contains("Credit Card payment failed")
      .should("exist")
      .and("be.visible");
  }
}
export default DetailsPage;
