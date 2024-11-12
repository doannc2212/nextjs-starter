import React from "react";
import Home from "./page";

describe("<Home />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);

    const url =
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app";
    cy.get(`a[href=${url}]`).should("be.visible");
  });
});
