
describe('Main', function () {
  beforeEach(function () {
    cy.server()

    cy.route({
      method: 'GET',
      url: Cypress.env('baseSearchUrl').replace('{searchTerm}', 'lambda'),
      response: 'fixture:lambda_search_results.json'
    })

    cy.fixture('lambda_search_results.json').as('lambda_search_results')

    cy.visit('/')
    cy.injectAxe()
  })

  it('loads the main page', function () {
    cy.title().should('eq', 'qit: Tech podcasts by topic')
    cy.get('input').should('have.attr', 'placeholder', 'Search for a great podcast here!')
    cy.checkA11y()
  })

  it('can perform a search via the form', function () {
    // get the input element, type lambda into it, verify the text is in the input
    cy.get('input')
      .type('lambda')
      .should('have.value', 'lambda')

    // submit the form to execute the search
    cy.get('form').submit()
    cy.checkA11y()
  })
})
