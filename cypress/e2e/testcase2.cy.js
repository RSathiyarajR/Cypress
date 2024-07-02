describe('login test practice2', () => {
it('Verify Login with given positive and negative', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('input[name="username"]').type("incorrectUser")
cy.get('input[name="password"]').type("Password123")
cy.get('button[class="btn"]').click()
cy.get('.show').should('be.visible')
cy.get('.show').should('have.text','Your username is invalid!')
})
})