describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
    });

    it("displays about Me Header", () => {
      cy.get("#about-header").should("contain", "About Me");
    });
    it("displays componenet name in url", () => {
      cy.url().should("contain", "About");
    });
    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not-exist");
    });
    it("does not display Hello World", () => {
      cy.get("#hello").should("not-exist");
    });
  });
  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click();
    });

    it("displays about Me Header", () => {
      cy.get("#projects-header").should("contain", "My projects");
    });
    it("displays componenet name in url", () => {
      cy.url().should("contain", "Projects");
    });
    it("does not display  About Me header", () => {
      cy.get("#about-header").should("not-exist");
    });
    it("does not display Hello World", () => {
      cy.get("#hello").should("not-exist");
    });
  });
  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
      cy.get("header").click();
    });

    it("displays Hello World", () => {
      cy.get("#hello").should("contain", "Hello");
    });
    it("displays componenet name in url", () => {
      cy.url().should("contain", "Hello");
    });
    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not-exist");
    });
    it("does not display Hello World", () => {
      cy.get("#about-header").should("not-exist");
    });
  });
});
