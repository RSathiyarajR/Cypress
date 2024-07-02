import HomePage from "../Pageobject/amazon_home";
import Category from "../Pageobject/todaysdeals";
import Signin from "../Pageobject/signin";

describe('Implementing Page Object Model', ()=>{
let amazonData;
let homepage=new HomePage()
let category=new Category()
let signinpage=new Signin()
before(()=>{
cy.fixture('amazondata').then((amazon)=>{
amazonData=amazon
})
})
it('Automate Amazon', ()=>{
homepage.visitingAmazon()
homepage.verifyTitlleOFHomePage(amazonData.pageTitle)
homepage.findHelloSigninAndClickSignIn()
signinpage.afterSigninGoBackToHome()
homepage.searchACategoryAndClick()
category.verifyTitleOfCategoryPage()
category.goBackToHome()
cy.get('#twotabsearchtextbox').type(amazonData.phone)
cy.get('#twotabsearchtextbox').type('{enter}')
})
})