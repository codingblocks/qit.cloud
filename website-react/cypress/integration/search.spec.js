
describe('Search', function () {

  describe('Input', function () {

    beforeEach(function () {
      cy.server()

      cy.route({
        method: 'GET',
        url: 'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&search=lambda',
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
      cy.get('li').should('have.length', this.lambda_search_results['@odata.count'])
    })

    it('returns empty results', function () {
      // TODO: find better way to clear the search input
      //cy.visit('/')

      cy.route({
        method: 'GET',
        url: 'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&search=empty',
        response: []
      })

      cy.get('input')
        .clear()
        .type('empty')
        .should('have.value', 'empty')

      cy.get('form').submit()

      cy.get('#resultText').contains('0 results for "empty"')
      cy.get('#noResults').contains('No results were found. Please try again.')
    })

    it('can load the main page via back button', function () {
      cy.get('button').contains('<').click()
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should('have.attr', 'placeholder', 'Search for a great podcast here!')
    })

    it('can load main page directly', function () {
      cy.visit('/')
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should('have.attr', 'placeholder', 'Search for a great podcast here!')
    })
  })

  describe('Direct', function () {
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

    it('returns the correct results length', function () {
      cy.get('li').should('have.length', this.lambda_search_results['@odata.count'])
    })

    it('returns empty results', function () {
      
      cy.route({
        method: 'GET',
        url: 'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&search=empty',
        response: []
      })

      cy.visit('/search/empty')

      cy.get('#resultText').contains('0 results for "empty"')
      cy.get('#noResults').contains('No results were found. Please try again.')
    })

    it('can load the main page via back button', function () {
      cy.get('button').contains('<').click()
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should('have.attr', 'placeholder', 'Search for a great podcast here!')
    })

    it('can load main page directly', function () {
      cy.visit('/')
      cy.title().should('eq', 'qit: Tech podcasts by topic')
      cy.get('input').should('have.attr', 'placeholder', 'Search for a great podcast here!')
    })
  })
})
