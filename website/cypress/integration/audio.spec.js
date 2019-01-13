describe('Audio', function () {
  beforeEach(function () {
    cy.server()

    cy.route({
      method: 'GET',
      url: Cypress.env('baseSearchUrl').replace('{searchTerm}', 'audio'),
      response: 'fixture:audio_search_results.json'
    })

    cy.route({
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/**/wpp_132_vue_js.mp3?dest-id=209800',
      response: 'fixture:Sample.mp3'
    })

    cy.fixture('audio_search_results.json').as('audio_search_results')

    cy.visit('/search/audio')

    cy.get('[data-queue=add]').click({ multiple: true })
    cy.get('button').contains('<').click()
  })

  it.skip('can play & pause audio', function () {

  })
})
