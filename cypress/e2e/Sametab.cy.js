describe('Element Handover', () => {
it('same tab', () => {
cy.visit('https://rahulshettyacemy.com/AutomationPractice/')
cy.get('a[class="btn-style class1 class2"]').invoke('removeAttr','target').click()
})
})