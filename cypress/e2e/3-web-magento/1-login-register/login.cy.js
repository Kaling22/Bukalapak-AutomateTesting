describe("Login Failed Not Registered Email", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("bayu221200@gmail.com");
    cy.get("#pass").type("adminadmin");
    cy.get("#send2").click();
    cy.get(
      '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
    ).should("contain", "The account sign-in was incorrect");
  });
});

describe("Login Failed Blank Password Field", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"
    );
    cy.get("#email").type("matematika221200@gmail.com");
    cy.get("#pass").type(" ");
    cy.get("#send2").click();
    cy.get("#pass-error").should("contain", "This is a required field");
  });
});
