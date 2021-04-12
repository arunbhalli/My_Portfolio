
describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("[data-cy=about-tab]").click();
    });
    it("displays About Me header", () => {
      cy.get("[data-cy=about-header]").should("contain", "About Me");
    });
    cy.get("#projects-header").should("not.exist");
    cy.get("#cv-header").should("not.exist");
    cy.get("#contact-header").should("not.exist");
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
    cy.get("#cv-header").should("not.exist");
    cy.get("#contact-header").should("not.exist");
  });
  describe("back to My cv tab and it", () => {
    beforeEach(() => {
      cy.get("#cv-tab").click();
    });
      cy.get("#cv-header").should("contain", "CV");
      cy.get("#about-header").should("not.exist");
      cy.get("#contact-header").should("not.exist");
      cy.get("#projects-header").should("not.exist");
    });
  describe("back to My cv tab and it", () => {
    beforeEach(() => {
      cy.get("#contact-tab").click();
      });
      cy.get("#contact-header").should("contain", "Contact");
      cy.get("#about-header").should("not.exist");
      cy.get("#cv-header").should("not.exist");
      cy.get("#projects-header").should("not.exist");
    });
  });
