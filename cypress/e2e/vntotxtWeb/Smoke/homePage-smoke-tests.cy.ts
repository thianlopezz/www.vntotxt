describe('Web Page Home smoke tests', () => {
  beforeEach(() => {
    cy.visit('')
})
  it('Visit web page and no console errors', () => {
    // Check for console errors
    cy.window().then((win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });
    // Check that no console errors were logged
    cy.get('@consoleError').should('not.be.called');
  })


  it('Click on How it Works option should redirect to How it works section', () => {
    // Set the viewport to laptop
    cy.viewport('macbook-15')
    cy.get('a[href="#how-it-works"]').should('be.visible').and('contain', 'How it works').click();
    cy.get('#how-it-works').should('be.visible');
    // Set the viewport to mobile
    cy.viewport('iphone-8')
    cy.get('a[href="#how-it-works"]').should('be.visible').and('contain', 'How it works').click();
    cy.get('#how-it-works').should('be.visible');
    // Set the viewport to ipad
    cy.viewport('ipad-2')
    cy.get('a[href="#how-it-works"]').should('be.visible').and('contain', 'How it works').click();
    cy.get('#how-it-works').should('be.visible');
  })
})