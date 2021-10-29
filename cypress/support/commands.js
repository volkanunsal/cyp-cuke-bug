import '@testing-library/cypress';
import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';
import 'cypress-commands';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByClassName', (className, options) =>
  cy.get(`.${className}`, options),
);

Cypress.Commands.add(
  'dropFile',
  { prevSubject: false },
  (inputSelector, fileName) => {
    Cypress.log({ name: 'dropFile' });

    return cy
      .fixture(fileName, 'base64')
      .as('csv')
      .then(Cypress.Blob.base64StringToBlob)
      .then((blob) => {
        return cy.window().then((win) => {
          const file = new win.File([blob], fileName);
          const dataTransfer = new win.DataTransfer();
          dataTransfer.items.add(file);

          return cy
            .get(inputSelector)
            .trigger('drop', { dataTransfer, force: true });
        });
      });
  },
);

Cypress.Commands.add('getByLabel', (label) => {
  cy.log('**getByLabel**');
  cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('#' + id);
    });
});
