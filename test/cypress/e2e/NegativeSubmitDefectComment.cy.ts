describe("Submit Defect Comment", () => {
  const noCase = { matchCase: false };

  function init(action: Function) {
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
                  cy.wait(1000);
                  cy.contains("button", "comment", noCase).click();
                  cy.wait(500);
                  action();
                });
            });
        });
    });
  }

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

  it("Empty Fields", () => {
    init(() => {
      cy.contains("display name", noCase).type(" ");
      cy.contains("type your comment here", noCase).type(" ");
      cy.contains("button", "post comment", noCase)
        .click()
        .then(() => {
          cy.wait(1000);
          cy.contains("display name", noCase).click().scrollIntoView();
          cy.contains("label", "between 3 and 50", noCase).should("be.visible");
          cy.contains("label", "between 3 and 255", noCase).should(
            "be.visible"
          );
        });
    });
  });

  it("Long Input", () => {
    init(() => {
      cy.contains("display name", noCase).type(randomString(60));
      cy.contains("type your comment here", noCase).type(randomString(300));
      cy.contains("button", "post comment", noCase)
        .click()
        .then(() => {
          cy.wait(1000);
          cy.contains("display name", noCase).click().scrollIntoView();
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
