describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get("[data-testid='title']").contains("Vite + React");
  })
})