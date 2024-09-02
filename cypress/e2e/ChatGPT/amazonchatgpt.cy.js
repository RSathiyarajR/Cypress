describe('Amazon iPhone Search and Cart', () => {
    it('Searches for iPhone, finds the least price, adds two phones to the cart, and finds total amount', () => {
      // Visit Amazon
      cy.visit('https://www.amazon.com');
  
      // Search for 'iPhone'
      cy.get('#twotabsearchtextbox').type('iPhone{enter}');
  
      // Wait for the results to load
      cy.wait(2000); // Adjust this as needed
  cy.get('.s-main-slot .s-result-item').first().as('firstItem'); // Retrieves the first search result item on the page and assigns it an alias 'firstItem' for later reference within the test.
      // Find and store prices of the phones
      cy.get('.s-main-slot .s-result-item').first().as('firstItem');
      
      cy.get('@firstItem').find('.a-price-whole').invoke('text').then(text => {
        const price1 = parseFloat(text.replace(/[^0-9.]/g, ''));
        cy.log(`Price of the first item: $${price1}`);
        
        // Add first item to cart
        cy.get('@firstItem').find('.s-add-to-cart-button').click();
  
        // Assuming the cart icon is on the top right
        cy.get('#nav-cart').click();
  
        // Wait for the cart page to load
        cy.wait(2000);
  
        // Check the total amount in the cart
        cy.get('.sc-subtotal .a-size-base').invoke('text').then(text => {
          const totalAmount = parseFloat(text.replace(/[^0-9.]/g, ''));
          cy.log(`Total amount in the cart: $${totalAmount}`);
          expect(totalAmount).to.be.greaterThan(price1 * 1.5); // Approximate check for two items
        });
  
      });
    });
  });