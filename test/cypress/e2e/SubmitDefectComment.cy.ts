describe("Submit Defect Comment", () => {
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
                  cy.wait(2000);
                  cy.contains("button", "comment", noCase).click();
                  cy.wait(500);
                  const details =
                    "Test details for testing submitting comments " +
                    Math.random().toString(36).substring(2, 7);
                  const name =
                    "Tester " + Math.random().toString(36).substring(2, 7);
                  cy.contains("display name", noCase).type(name);
                  cy.contains("type your comment here", noCase).type(details);
                  cy.contains("button", "post comment", noCase)
                    .click()
                    .then(() => {
                      cy.wait(1000);
                      cy.contains(details, noCase).should("be.visible");
                      cy.contains(name, noCase).should("be.visible");
                    });
                });
            });
        });
    });
  });
});
