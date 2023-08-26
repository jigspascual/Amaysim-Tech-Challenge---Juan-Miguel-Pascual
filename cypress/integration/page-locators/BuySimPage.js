class BuySimPage{
    constructor(){
        this.radioButton = 'input[name="simType"]'
        this.numberSwitcher = 'div[data-testid="number-transfer-switcher"]'
        this.checkOutButton = 'a[data-testid="product-checkout-button"]'
    }
    //Select SimPlan if USIM (Physical Sim) or ESIM (Electronic Sim)
    selectSimType(simType){
        cy.get(this.radioButton,{timeout:10000}).check(simType,{force:true});
    }
    //Select if user retain their number(yes) or opt for a new sim(no)
    keepNumber(retainSim){
        cy.get(this.numberSwitcher).find('input').check(retainSim,{force:true})
    }
    clickCheckoutButton(){
        cy.get(this.checkOutButton).should('be.visible').click();
    }
    fillInDetails(simType,retainSim){
        this.selectSimType(simType);
        this.keepNumber(retainSim);
        this.clickCheckoutButton();
      } 
}
export default BuySimPage;