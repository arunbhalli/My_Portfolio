describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("https://localhost:3000");
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", "Made with React");
    cy.get("#hello").should("contain", "Hello World");
  });
});
