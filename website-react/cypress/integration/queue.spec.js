import { cy } from 'cypress'

describe('Queue', function () {
  beforeEach(function () {
    cy.server()

    cy.route({
      method: 'GET',
      url: 'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&search=lambda',
      response: 'fixture:lambda_search_results.json'
    })

    cy.fixture('lambda_search_results.json').as('lambda_search_results')

    cy.visit('/search/lambda')
  })

  it('can add to queue', function () {
    // Add to queue & go to queue page
    cy.get('li > button:first').click()
    cy.get('button').contains('<').click()

    // Verify 1 result in queue list
    cy.get('li').should('have.length', 1)
  })

  // TODO: skipped test, clicking all 26 buttons times out
  it.skip('can add many to queue', function () {
    // Click all add to queue buttons & go to queue page
    cy.get('li > button').click({ multiple: true })
    cy.get('button').contains('<').click()

    cy.get('li').should('have.length', this.lambda_search_results['@odata.count'])
  })

  it('can remove from queue', function () {
    // Add to queue & go to queue page
    cy.get('li > button:first').click()
    cy.get('button').contains('<').click()

    // Click remove queue button
    cy.get('li > button:first').click()
    cy.get('li').should('not.exist')
  })
})
