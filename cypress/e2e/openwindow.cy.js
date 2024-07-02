describe('Basic UI elements handling', () => {
it('open window', () => {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.on('window:before:load',(win)=>{
cy.stub(win,'open').callsFake((url)=>{
win.location.href = url;
})
})
cy.get('#openwindow').click();
})
})