// Define at the top of the spec file or just import it
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task('table', violationData);
}

describe('brenden-dev', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should show the full header on scroll', () => {
    cy.get('header a').should('not.be.visible');
    cy.scrollTo(0, 400);
    cy.get('header a').should('be.visible');
  });

  it('has no detectably a11y violations on load', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting -- need to wait for css transitions for dark mode to finish. Can't figure out how to get this to work otherwise.
    cy.wait(700).then(() => {
      cy.get('h1');
      cy.checkA11y(null, null, terminalLog);
    });
  });
});
