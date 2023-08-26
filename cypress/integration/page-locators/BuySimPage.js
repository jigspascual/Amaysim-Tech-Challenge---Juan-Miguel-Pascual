class BuySimPage{
    constructor(){
        this.radioButton = 'input[name="simType"]'
        this.numberSwitcher = 'div[data-testid="number-transfer-switcher"]'
    }
    fillInDetails(simType,retainSim){
        cy.get(this.radioButton,{timeout:10000}).check(simType,{force:true});
        cy.get(this.numberSwitcher).find('input').check(retainSim,{force:true})
      } 

}
export default BuySimPage;