class Category {
verifyTitleOfCategoryPage(){
    return cy.title().should('include', "Deals")
}
goBackToHome(){
return cy.go('back')
}
}
export default Category;