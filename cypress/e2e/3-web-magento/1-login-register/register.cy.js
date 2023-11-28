// describe("Success Create Account", () => {
//   it("passes", () => {
//     cy.visit(
//       "https://magento.softwaretestingboard.com/customer/account/create/"
//     );
//     cy.get("#firstname").type("Bayu");
//     cy.get("#lastname").type("Rezky Ramadhan");
//     cy.get("#email_address").type("matematika221200@gmail.com");
//     cy.get("#password").type("Adminadmin1");
//     cy.get("#password-confirmation").type("Adminadmin1");
//     cy.get(".action.submit.primary").click();
//   });
// });

describe("Failed Create Acc, wrong email format", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("Bayu");
    cy.get("#lastname").type("Rezky Ramadhan");
    cy.get("#email_address").type("bayu221200");
    cy.get("#password").type("Adminadmin1");
    cy.get("#password-confirmation").type("Adminadmin1");
    cy.get(".action.submit.primary").click();
    cy.get("#email_address-error").should("contain", "Please enter");
  });
});

describe("Failed Register, Already Registered Email", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("Bayu");
    cy.get("#lastname").type("Rezky Ramadhan");
    cy.get("#email_address").type("matematika221200@gmail.com");
    cy.get("#password").type("Adminadmin1");
    cy.get("#password-confirmation").type("Adminadmin1");
    cy.get(".action.submit.primary").click();
    cy.get(".message-error.error.message").should(
      "contain",
      "There is already an account"
    );
  });
});

describe("Failed Register, Password too weak", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("Bayu");
    cy.get("#lastname").type("Rezky Ramadhan");
    cy.get("#email_address").type("matematika221200@gmail.com");
    cy.get("#password").type("adminadmin");
    cy.get("#password-strength-meter").should("contain", "Weak");
  });
});

describe("Failed Register, Blank First Name", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#lastname").type("Rezky Ramadhan");
    cy.get("#email_address").type("matematika221200@gmail.com");
    cy.get("#password").type("Adminadmin1");
    cy.get("#password-confirmation").type("Adminadmin1");
    cy.get(".action.submit.primary").click();
    cy.get("#firstname-error").should("contain", "required");
  });
});

describe("Failed Register, Blank Last Name", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("Bayu");
    cy.get("#email_address").type("matematika221200@gmail.com");
    cy.get("#password").type("Adminadmin1");
    cy.get("#password-confirmation").type("Adminadmin1");
    cy.get(".action.submit.primary").click();
    cy.get("#lastname-error").should("contain", "required");
  });
});

describe("Failed Register, Blank Password Confirmation", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type("Bayu");
    cy.get("#lastname").type("Rezky Ramadhan");
    cy.get("#email_address").type("matematika221200@gmail.com");
    cy.get("#password").type("Adminadmin1");
    cy.get(".action.submit.primary").click();
    cy.get("#password-confirmation-error").should("contain", "required");
  });
});
