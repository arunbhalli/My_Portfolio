describe("User can  see lisy of Projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("Restaurant Project", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "An application for restaurant to show details of there restaurant.");
      cy.get(".header").should("contain", "Restaurant Project.");
    });
  });
  it("My bible Project", () => {
    cy.get("#project-2").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "My Bible project to add new Translations ");
      cy.get(".header").should("contain", "My bible Project.");
    });
  });
  it("Fizz Buzz Game Project", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "An application to play FizzBuzz Game for Brain Exercise");
      cy.get(".header").should("contain", "Fizz Buzz Game Project.");
    });
  });
  it("Faulty Calculator with Python", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "I created the Faulty calculator for checking that calculator can give specific result on fixed values.");
      cy.get(".header").should("contain", "Faulty Calculator with Python");
    });
  });
  it("Atm project with Ruby", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain", "An aplication for withdrawing Cash");
      cy.get(".header").should("contain", "Atm project with Ruby");
    });
  });
  it("Guessing Game with Python", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain","Game to guess no in 5 attempts")
      cy.get(".header").should("contain", "Guessing Game with Python");
    });
  });
  it("My Library Project ", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get("description").should("contain","Game to guess no in 5 attempts")
      cy.get(".header").should("contain", "My Library Project ");
    });
  });
});
