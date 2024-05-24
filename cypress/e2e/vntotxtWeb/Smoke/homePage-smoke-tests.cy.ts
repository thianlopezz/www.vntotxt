let fixtureData: { [x: string]: any; };
describe('Web Page Home smoke tests', () => {
  before(() => {
    cy.fixture('vntotxt').then((data) => {
      fixtureData = data;
    });
})
  beforeEach(() => {
    cy.visit('')
})
  it('Verify that when visiting web page and no console errors appears', () => {
    cy.get('#hero-section').should('be.visible');
    cy.get('#phone-section').should('be.visible');
    // Check for console errors
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });
    // Check that no console errors were logged
    cy.get('@consoleError').should('not.be.called');
  })

  it('Verify that when clicking on How it Works option, it redirects to How it works section in standard resolution', () => {
    // Set the viewport to laptop
    cy.viewport('macbook-15')
    cy.get('#how-it-works-link').should('be.visible').and('contain', 'How it works').click();
    cy.get('#how-it-works').should('be.visible');
  })

  it('Verify that when clicking on How it Works option, it redirects to How it works section in mobile resolution', () => {
    // Set the viewport to mobile
    cy.viewport('iphone-8')
    cy.get('.dropdown').should('be.visible').click();
    cy.get('#how-it-works-mobile-link').should('be.visible').and('contain', 'How it works').click();
    cy.get('#how-it-works').should('be.visible');
  })

  it('Verify that when clicking on How it Works option, it redirects to How it works section in tablet resolution', () => {
    // Set the viewport to mobile
    cy.viewport('ipad-2')
    cy.get('.dropdown').should('be.visible').click();
    cy.get('#how-it-works-mobile-link').should('be.visible').and('contain', 'How it works').click();
    cy.get('#how-it-works').should('be.visible');
  })

/*Current cypress bug> https://github.com/cypress-io/cypress/issues/29196
it.only('Verify that when clicking on Get Started button, it redirects to Whatsapp continue to chat option', () => {
    cy.contains('a', 'Get started!')
          .invoke('removeAttr', 'target')
          .then($a => {
              const href = $a.prop('href');
              // Click the link and visit the URL manually
              cy.wrap($a).click();
              cy.visit(href);
          });

        // Verify the new URL includes the phone number from the fixture
        cy.url().should('include', `https://api.whatsapp.com/send?phone=${fixtureData['bot-phone']}`);
  })*/
})
