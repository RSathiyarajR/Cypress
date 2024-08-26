describe('Basic UI elements handling', () => {
    it('iframe', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // iframe handling
    cy.frameLoaded('#courses-iframe')
    cy.wait(2000)
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()

    })
})