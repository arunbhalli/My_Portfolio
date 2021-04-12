describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "My Contact");
    cy.get("#header").should("contain", "My cv");
    cy.get("#header").should("contain", "About me");
    cy.get("#footer").should("contain", "Made Arun Singh");
  });
});
