const testSearchTerm = 'ggiibb'
describe('Search', function () {
  describe('Input', function () {
    beforeEach(function () {
      cy.server()

      cy.route({
        method: 'GET',
        url: Cypress.env('baseSearchUrl').replace('{searchTerm}', 'lambda'),
        response: 'fixture:lambda_search_results.json'
      })

      cy.fixture('lambda_search_results.json').as('lambda_search_results')

      cy.visit('/')

      // get the input element, type lambda into it, verify the text is in the input
      cy.get('input')
        .type('lambda')
        .should('have.value', 'lambda')

      // submit the form to execute the search
      cy.get('form').submit()
    })

    it('returns the correct results length', function () {
      cy.get('[data-item-type=search]').should(
        'have.length',
        this.lambda_search_results['@odata.count']
      )
    })

    it('returns empty results', function () {
      cy.route({
        method: 'GET',
        url: Cypress.env('baseSearchUrl').replace(
          '{searchTerm}',
          `${testSearchTerm}`
        ),
        response: []
      })

      // This visit back the root is needed to avoid a race condition when
      // running with electron in headless mode. Issue #127
      cy.visit('/')

      cy.get('input')
        .clear()
        .type(testSearchTerm)
        .should('have.value', testSearchTerm)

      cy.get('form').submit()

      cy.get('#resultText').contains(`0 results for ${testSearchTerm}`)
      cy.get('#noResults').contains('No results were found. Please try again.')
    })

    it('can load the main page via back button', function () {
      cy.get('#root').click({ force: true })
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should(
        'have.attr',
        'placeholder',
        'Search for a great podcast here!'
      )
    })

    it('can load main page directly', function () {
      cy.visit('/')
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should(
        'have.attr',
        'placeholder',
        'Search for a great podcast here!'
      )
    })
  })

  describe('URL', function () {
    beforeEach(function () {
      cy.server()

      cy.route({
        method: 'GET',
        url: Cypress.env('baseSearchUrl').replace('{searchTerm}', 'lambda'),
        response: 'fixture:lambda_search_results.json'
      })

      cy.fixture('lambda_search_results.json').as('lambda_search_results')

      cy.visit('/search/lambda')
    })

    it('returns the correct results length', function () {
      cy.get('[data-item-type=search]').should(
        'have.length',
        this.lambda_search_results['@odata.count']
      )
    })

    it('returns empty results', function () {
      cy.route({
        method: 'GET',
        url: Cypress.env('baseSearchUrl').replace(
          '{searchTerm}',
          `${testSearchTerm}`
        ),
        response: []
      })

      cy.visit(`/search/${testSearchTerm}`)

      cy.get('#resultText').contains(`0 results for ${testSearchTerm}`)
      cy.get('#noResults').contains('No results were found. Please try again.')
    })

    it('can load the main page via back button', function () {
      cy.get('#root').click({ force: true })
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should(
        'have.attr',
        'placeholder',
        'Search for a great podcast here!'
      )
    })

    it('can load main page directly', function () {
      cy.visit('/')
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should(
        'have.attr',
        'placeholder',
        'Search for a great podcast here!'
      )
    })
  })
})
