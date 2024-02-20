describe("Submit Defect Report", () => {
  const noCase = { matchCase: false };
  it("Reporting Defect", () => {
    cy.visit("/").then(() => {
      cy.contains("Report Defect", noCase)
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
                  const title =
                    "Test Defect " + Math.random().toString(36).substring(2, 7);
                  const details =
                    "Test details for testing reporting a defect " +
                    Math.random().toString(36).substring(2, 7);
                  const name =
                    "Tester " + Math.random().toString(36).substring(2, 7);
                  const email =
                    "tester@test.com" +
                    Math.random().toString(36).substring(2, 7);
                  cy.contains("Report Title", noCase).type(title);
                  cy.contains("Defect Details").type(details);
                  cy.contains("Display Name", noCase).type(name);
                  cy.contains("e-mail address", noCase).type(email);
                  cy.contains("Submit", noCase)
                    .click()
                    .then(() => {
                      cy.contains(title, noCase).should("be.visible");
                      cy.contains(details, noCase).should("be.visible");
                      cy.contains(name, noCase).should("be.visible");
                    });
                });
            });
        });
    });
  });
});
