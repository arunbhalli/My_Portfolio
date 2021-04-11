describe("User can  see lisy of Projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays the first Project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "My First Website");
      cy.get(".header").should("contain", "This was My first project.");
    });
  });
  it("displays the second Project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "My Second Website");
      cy.get(".header").should("contain", "This was My second project.");
    });
  });
  it("displays the third Project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "My Third Website");
      cy.get(".header").should("contain", "This was My third project.");
    });
  });
});
