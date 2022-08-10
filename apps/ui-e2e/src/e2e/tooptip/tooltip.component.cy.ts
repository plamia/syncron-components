describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tooltipcomponent--primary'));
  it('should render the component', () => {
    cy.get('syncron-sdk-components-tooltip').should('exist');
  });
});
