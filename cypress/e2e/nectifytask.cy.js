describe('netlify task', () => {
it('add to cart', () => {
cy.visit('https://commercejs-demo-store.netlify.app/')
cy.get('a[class="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn"]').eq(0).click({force: true})
cy.get('p[class="mb-2 position-relative cursor-pointer"]').eq(1).click()
cy.get('p[class="font-size-subheader mb-2 font-weight-medium"]').eq(3).click()
cy.get('button[type="button"]').eq(0).click()
cy.wait(3000)
cy.get('svg[preserveAspectRatio="xMidYMid slice"]').click()
cy.wait(6000)
cy.get('div[class="col-12 col-md-6"]').click()
cy.get('select').select('Worldwide - 5.00 USD').should('have.value','Worldwide - 5.00 USD')
//cy.get('select').select('option2').should('have.value','option2');

})
})
