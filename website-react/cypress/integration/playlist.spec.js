
describe('Playlist', function () {
  beforeEach(function () {
    cy.server()

    cy.route({
      method: 'GET',
      url: Cypress.env('baseSearchUrl').replace('{searchTerm}', 'six'),
      response: 'fixture:six_search_results.json'
    })

    cy.fixture('six_search_results.json').as('six_search_results')

    cy.visit('/search/six')
  })

  describe('Add & Remove', function () {
    it('can add & remove 1 from the playlist', function () {
      // Add to queue & go to queue playlist
      cy.get('[data-playlist=add]:first').click()
      cy.get('button').contains('<').click()

      // Verify 1 result in playlist list
      cy.get('[data-item-type=playlist]').should('have.length', 1)

      // Click remove playlist button
      cy.get('[data-playlist=remove]:first').click()

      // Verify its removed
      cy.get('[data-item-type=playlist]').should('not.exist')
    })

    it('can add & remove many from the playlist', function () {
      // Click all add to queue buttons & go to playlist page
      cy.get('[data-playlist=add]').click({ multiple: true })
      cy.get('button').contains('<').click()

      cy.get('[data-item-type=playlist]').should('have.length', this.six_search_results['@odata.count'])

      // Click all the remove buttons
      cy.get('[data-playlist=remove]').click({ multiple: true })

      // Verify its removed
      cy.get('[data-item-type=playlist]').should('not.exist')
    })
  })

  describe('Drag To Sort', function () {
    function movePlaylistItem (selector, x, y) {
      cy.get(selector)
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: x, clientY: y })
        .trigger('mouseup', {force: true})
    }

    beforeEach(function () {
      // Click all add to queue buttons & go to playlist page
      cy.get('[data-playlist=add]').click({ multiple: true })
      cy.get('button').contains('<').click()
    })

    it.skip('can drag playlist item down', function () {
      movePlaylistItem('[data-playlist=drag]:first', 800, 600)
    })

    it.skip('can drag playlist item up', function () {

    })
  })
})
