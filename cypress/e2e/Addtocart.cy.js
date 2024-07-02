describe('Amaazon order', () => {
it('to add a product in cart', () => {
cy.visit('https://www.amazon.in/')
cy.get('#twotabsearchtextbox').type("xiaomi 14 pro")
cy.get('#nav-search-submit-button').click()
cy.wait(2000)
cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).invoke('removeAttr','target').click();
cy.get('input[type="submit"]').eq(6).click()
//cy.get('div h4[class="a-alert-heading"]').eq(2).should('have.text','Added to Cart')
})
})