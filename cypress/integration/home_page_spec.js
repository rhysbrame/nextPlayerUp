describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Navigation', () => {
  it('should navigate to the team page', () => {
    // Start from the index page
    cy.visit('/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/teams/"]').first().click();

    // The new url should include "/about"
    cy.url().should('include', '/teams/');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Team');
  });
});
