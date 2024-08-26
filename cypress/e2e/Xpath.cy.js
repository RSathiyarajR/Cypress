describe('API Testing',()=>{
    it('GET',()=>{
      cy.request('GET','https://reqres.in/api/users')
      .its('status').should('equal',200)
      
    })
    
    
    
  })