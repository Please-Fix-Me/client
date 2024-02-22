const noCase = { matchCase: false };

function randomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function openDefectReportForm(action: Function) {
  cy.visit("/").then(() => {
    cy.contains("Search Products", noCase)
      .click()
      .then(() => {
        cy.contains("search for product", noCase).type("test");
        cy.contains("button", "search", noCase)
          .click()
          .then(() => {
            cy.contains("comments", noCase)
              .click()
              .then(() => {
                cy.contains("Report Defect", noCase).click();
                cy.wait(1000);
                action();
              });
          });
      });
  });
}

describe("Submit Defect Report", () => {
  it("Blank Fields", () => {
    openDefectReportForm(() => {
      cy.contains("Report Title", noCase).type(" ");
      cy.contains("Defect Details").type(" ");
      cy.contains("Display Name", noCase).type(" ");
      cy.contains("e-mail address", noCase).type(" ");
      cy.contains("Submit", noCase)
        .click()
        .then(() => {
          cy.contains("label", "size must be between 3 and 50", noCase).should(
            "be.visible"
          );
          cy.contains("label", "size must be between 3 and 255", noCase).should(
            "be.visible"
          );
          cy.contains(
            "label",
            "must be a well-formed email address",
            noCase
          ).should("be.visible");
        });
    });
  });

  it("Long Input", () => {
    openDefectReportForm(() => {
      cy.contains("Report Title", noCase).type(randomString(90));
      cy.contains("Defect Details", noCase).type(randomString(300));
      cy.contains("e-mail address", noCase).type("tester@test.com");
      cy.contains("Submit", noCase)
        .click()
        .then(() => {
          cy.contains("label", "size must be between 3 and 50", noCase).should(
            "be.visible"
          );
          cy.contains("label", "size must be between 3 and 255", noCase).should(
            "be.visible"
          );
        });
    });
  });
});
