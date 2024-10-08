describe('Saucedemo Task', () => {
it('Add to card and validate', () => {
cy.visit('https://www.saucedemo.com/v1/')
cy.get('input[class="form_input"]').eq(0).type("standard_user")
cy.get('input[class="form_input"]').eq(1).type("secret_sauce")
cy.get('#login-button').click()
cy.get('button[class="btn_primary btn_inventory"]').eq(0).click()
cy.get('button[class="btn_primary btn_inventory"]').eq(4).click()
cy.get('path[fill="currentColor"]').click()
cy.get('.inventory_item_price').eq(0).should('have.text','29.99')
cy.get('.inventory_item_price').eq(1).should('have.text','15.99')
cy.get('a[class="btn_action checkout_button"]').click()
cy.get('#first-name').type('Sathiyaraj')
cy.get('#last-name').type('R')
cy.get('#postal-code').type('600040')
cy.get('input[class="btn_primary cart_button"]').click()
cy.get('.summary_total_label').should('have.text','Total: $49.66')
cy.get('a[class="btn_action cart_button"]').click()
cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
})
})