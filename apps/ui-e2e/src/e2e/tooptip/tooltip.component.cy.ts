describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tooltipcomponent--primary'));
  it('should render the component', () => {
    cy.get('syncron-sdk-components-tooltip').should('exist');
  });
  it('should have a title', () => {
    cy.get('h2').should('have.text', 'Tooltip');
  });
  it('should render a slider component', () => {
    cy.get('mat-slider').should('exist').should('have.class', 'testClass');
  });
  it('should change color when moving slider thumb', () => {
    cy
      .get('.mat-slider')
      .should('have.class', 'mat-slider-min-value')
      .get('.mat-slider-thumb')
      .type('{rightArrow}')
      .get('mat-slider')
      .should('not.have.class', 'mat-slider-min-value');
  });
});
