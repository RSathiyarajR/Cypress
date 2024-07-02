describe('login test practice3', () => {
it('Verify Login with given positive and negative', () => {
cy.visit('https://practicetestautomation.com/practice-test-login/')
cy.get('input[name="username"]').type("student")
cy.get('input[name="password"]').type("incorrectPassword")
cy.get('button[class="btn"]').click()
cy.get('.show').should('be.visible')
cy.get('.show').should('have.text','Your password is invalid!')
})
})