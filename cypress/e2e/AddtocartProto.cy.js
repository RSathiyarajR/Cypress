describe('proto commerce', () => {
let a;
before(()=>{
cy.fixture('example').then((prod)=>{
a=prod
})
})
beforeEach(()=>{
cy.visit('/')
})
it('Proto-add to cart', () => {
    
a.ProductsToAdd.forEach((mobiles) => {
cy.addingMultiProducts(mobiles)
})
cy.wait(3000)
cy.get('a[class="nav-link btn btn-primary"]').click()
cy.get('button[class="btn btn-success"]').click()
cy.get('#country').type('In')
// cy.get('.suggestions a').each(($optionts)=>{
//     if($optionts.text().includes('India')){
//         cy.wrap($optionts).click()
//     }
// })
})
})