describe('brenden-dev', () => {
  beforeEach(() => cy.visit('/'));

  it('should show the full header on scroll', () => {
    cy.get('header a').should('not.be.visible');
    cy.scrollTo(0, 400);
    cy.get('header a').should('be.visible');
  });
});
