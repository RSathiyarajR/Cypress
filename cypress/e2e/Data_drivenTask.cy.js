describe('ProtoCommerce', () => {
let a;
before(()=>{
//cy.viewport(1024,1366)
cy.fixture('example').then((datadriven)=>{
a=datadriven
})
})
it('By data driven', () => {
cy.visit('https://rahulshettyacademy.com/angularpractice/')
cy.get('input[name="name"]').eq(0).type(a.Name)
cy.get('input[name="email"]').eq(0).type(a.Email)
cy.get('#exampleInputPassword1').eq(0).type(a.Password)
cy.get('#exampleCheck1').click()
cy.get('#inlineRadio2').click()
//cy.get('input[type="radio"]').click()
cy.get('input[type="date"]').type(a.Date_of_Birth)
cy.get('input[type="text"]').eq(2).should('have.text','')
//cy.get('div[class="alert alert-success alert-dismissible"]').should('include',
  // 'Success! The Form has been submitted successfully!.')
cy.get('a[class="nav-link"]').eq(1).click()
//cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
a.ProductsToAdd.forEach((mobiles) => {
cy.addingMultiProducts(mobiles)
})
cy.wait(3000)
cy.get('a[class="nav-link btn btn-primary"]').click()
cy.get('button[class="btn btn-success"]').click()
cy.get('#country').type('In')
//cy.wait(8000)
// cy.get('div[class="suggestions"]').each(($optionts)=>{
//     if($optionts.text().includes('India')){
// cy.wrap($optionts).click()    
// }
// })
cy.get('label[for="checkbox2"]').click()
cy.get('input[class="btn btn-success btn-lg"]').click()
//cy.get('div[class="alert alert-success alert-dismissible"]').should('have.text',
  //  'Success! Thank you! Your order will be delivered in next few weeks :-')
})
})