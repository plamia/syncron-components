describe('syncron-sdk', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('syncron-sdk-components-root').should('exist');
  });
});
