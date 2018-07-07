// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//
// This code section will globally null fetch which causes the
// fallback of XHR to be used, which is well supported by
// cypress for stubbing and controlling return values.
//
// The alternative would be do so the following on each cy.visit()
//
//    cy.visit('/', {
//      onBeforeLoad: (win) => {
//        win.fetch = null
//      }
//    })
//
// Reference: https://github.com/cypress-io/cypress/issues/95#issuecomment-347607198
Cypress.on('window:before:load', win => {
  win.fetch = null
  
  const unregisterSW = () => {
    return navigator.serviceWorker.getRegistrations()
    .then((registrations) => {
      const unregisterPromise = registrations.map((registration) => {
        return registration.unregister();
      });
      return Promise.all(unregisterPromise);
    });
  };

  const clearCaches = () => {
    return window.caches.keys()
    .then((cacheNames) => {
      return Promise.all(cacheNames.map((cacheName) => {
        return window.caches.delete(cacheName);
      }));
    });
  };

  return Promise.all([
    unregisterSW(),
    clearCaches(),
  ]);
})
