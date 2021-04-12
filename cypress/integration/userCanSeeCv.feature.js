describe("User can see CV", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=cv-tab]").click();
  });

  it("displays headers for cv sections", () => {
    cy.get("[data-cy=personal-info-header]").should(
      "contain.text",
      "Personal Info"
    );
    cy.get("[data-cy=work-experience-header]").should(
      "contain.text",
      "Work Experience"
    );
    cy.get("[data-cy=education-header]").should("contain.text", "Education");
  });

  it("displays content for personal info", () => {
    cy.get("[data-cy=address]").should("contain.text", "Sadalgatan 143");
    cy.get("[data-cy=city]").should("contain.text", "Uplands vasby");
    cy.get("[data-cy=country]").should("contain.text", "Sweden");
    cy.get("[data-cy=phone]").should("contain.text", "+46793064348");
    cy.get("[data-cy=email]").should(
      "contain.text",
      "aruntomar8532014821@gmail.com"
    );
    cy.get("[data-cy=github]").should("contain.text", "arunbhalli");
  });

  it("displays content for work experience", () => {
    cy.get("[data-cy=]").should("contain.text", "Front desk Manager");
    cy.get("[data-cy=Front Desk Manager]").should(
      "contain.text",
      "Front Desk Managerr"
    );
    cy.get("[data-cy=Front Desk Executive]").should(
      "contain.text",
      "Front Desk Executive"
    );
  });

  it("displays content for education", () => {
    cy.get("[data-cy=Intermediate]").should("contain.text", "Bachelors");
    cy.get("[data-cy=fullstack-web-developer]").should(
      "contain.text",
      "Fullstack Web Developer"
    );
  });
});
