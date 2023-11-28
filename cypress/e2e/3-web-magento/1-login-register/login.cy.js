describe("Login Success", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("matematika221200@gmail.com");
    cy.get("#pass").type("Adminadmin1");
    cy.get("#send2").click();
    cy.get(".greet.welcome").should("contain", "Click");
  });
});

describe("Login Failed Not Registered Email", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("bayu221200@gmail.com");
    cy.get("#pass").type("adminadmin");
    cy.get("#send2").click();
    cy.get(".message-error.error.message").should(
      "contain",
      "The account sign-in was incorrect"
    );
  });
});

describe("Login Failed Blank Password Field", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("matematika221200@gmail.com");
    cy.get("#send2").click();
    cy.get(".message-error.error.message").should("contain", "required");
  });
});

describe("Login Failed Blank Email Field", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#pass").type("Adminadmin1");
    cy.get("#send2").click();
    cy.get(".message-error.error.message").should("contain", "required");
  });
});
