import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:4200/'
Given('I open the home page', () => {
  cy.visit(url);
});

Then('I can see the correct title', () => {
  cy.contains('[data-cy=title]', 'cypress-demo');
});
