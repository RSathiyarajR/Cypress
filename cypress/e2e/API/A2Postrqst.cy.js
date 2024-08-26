describe('Sample Execution', () => {
    it('Http request', () => {
    
     cy.request({
        method:'POST',
        url:'https://reqres.in/api/users',
        body:{
        name: "morpheus",
            job: "leader"
        }
     })
     .its('status').should('equal',201)

 })
})
