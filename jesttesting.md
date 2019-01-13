## Jest Testing ##

Adding Jest-based test for both part of the unit, and hopefully an end-to-end offline testing. The unit tests seem to be lacking, and the issue of testing how much will work offline is near-perfect for the Jest model. **This documentation is ongoing, and will have updates frequently.**

## New libraries added ##

[JestDOM](https://github.com/gnapse/jest-dom) extends the list of `expect` statements, and makes testing certain areas easier. This is installed via `npm`, and needs called only once during a setup. Adding the ability to test for visibility, attributes, and focus makes this fair small, MIT licensed library a worthwhile addition to the testing harness.

[Service Worker Mock](https://github.com/pinterest/service-workers/tree/master/packages/service-worker-mock), created by  Pinterest, is a MIT licensed library that allows you to turn a Node environment into a faux service worker, and adds some service worker specific testing language, such as testing for cache cleanout. This will make testing the service worker area more clean, and save time writing manual mocks.

## The setup files ##

In the `__tests__` folder (note the double underlines) is `setup.js`, containing all of the modules for running Jest tests, so they can be imported easily to run area- or module-specific tests. This allows a consistent setup to be done for each set of tests, keeps the named modules in a single spot, and encourages both reuse of code and allows for customization of setups. Please export these by module names, as it will allow a single area to insure which modules are being used in the case of a failed test.

## Current tests 8 January 2018 ##

The tests added, on this date are at the "smoke test" level, and slightly deeper. These test will remain - as of this moment - to insure coverage for the very basic items they cover. 

`App.test` has a simple smoke test, insuring that the testing harness itself works; a render test to verify that a div can be created in the ReactDOM area, render the app, and unmount it; and some simple unit tests for the opening index, currently insuring that test matches what is anticipated.

`sw.test` has a copied simple service worker test.
