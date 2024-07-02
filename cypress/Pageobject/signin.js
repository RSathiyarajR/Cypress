class Signin{
afterSigninGoBackToHome(){
cy.wait (2000)
cy.go('back')
}
}
export default Signin;