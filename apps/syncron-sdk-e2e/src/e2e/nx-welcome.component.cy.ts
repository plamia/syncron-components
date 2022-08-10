describe('syncron-sdk', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('syncron-sdk-components-nx-welcome').should('exist');
  });
});
