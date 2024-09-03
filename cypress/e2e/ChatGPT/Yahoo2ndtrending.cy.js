describe('Yahoo News Trending', () => {
    it('Finds the 2nd trending news from the 1st trending news on Yahoo.com', () => {
      // Replace with the updated URL if the URL has changed
      const trendingUrl = 'https://www.yahoo.com/news/'; // Update this URL if necessary
  
      // Visit Yahoo News trending page
      cy.visit(trendingUrl, { failOnStatusCode: false });
  
      // Optional: Check if the page contains content
      //cy.get('body').should('contain', 'Trending News');
  
      // Wait for the page to load
      cy.wait(3000); // Adjust this wait time as needed
  
      // Find and store the 1st trending news headline
      cy.get('.trending-item').eq(0).find('a').invoke('text').as('firstTrendingHeadline');
  
      // Use the stored headline to find the 2nd trending news headline
      cy.get('@firstTrendingHeadline').then(firstHeadline => {
        cy.log(`First Trending Headline: ${firstHeadline}`);
  
        // Find the 2nd trending news headline
        cy.get('.trending-item').eq(1).find('a').invoke('text').then(secondHeadline => {
          cy.log(`Second Trending Headline: ${secondHeadline}`)
          
          // Optionally, assert or perform further actions
          // Example assertion:
          expect(secondHeadline).to.not.be.empty;
        });
      });
    });
  });