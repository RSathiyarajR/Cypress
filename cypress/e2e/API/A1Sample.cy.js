describe('Sample Execution', () => {
       it('Http request', () => {
        //2 values will declaring 1)http methed-GET,PUT,POST 2)endpoint value
        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status').should('equal',200)

    })
})
