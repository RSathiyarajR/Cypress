describe('Basic UI elements handling', () => {
it('UI Elements validation and testing', () => {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//radio button
cy.get('[value="radio2"]').check().should('be.checked');
//checkbox
cy.get('#checkBoxOption2').check().should('be.checked');
cy.wait(4000)
cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
cy.get('label input[type="checkbox"]').check(["option1","option2"]).should('be.checked');
//static dropdown
cy.get('select').select('option2').should('have.value','option2');
//dynamic dropdown
cy.get('[placeholder="Type to Select Countries"]').type('in');//we can change search option in type box//wrap
cy.get('.ui-menu-item div').each(($options)=>{// options is a name wecan enter any name
if($options.text().includes('India')){
cy.wrap($options).click({force: true})// {force: true} suggestion given by cypress itself in the console
} 
})
cy.get('[placeholder="Type to Select Countries"]').should('have.value','India') 
})
})