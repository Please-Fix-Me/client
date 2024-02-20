describe("Vote On Defect", () => {
  const noCase = { matchCase: false };
  it("Voting", () => {
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
                  cy.contains("i", "thumb_up_alt").click();
                  cy.contains("i", "thumb_down_alt").click();
                });
            });
        });
    });
  });
});
