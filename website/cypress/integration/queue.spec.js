
describe('Queue', function () {
  beforeEach(function () {
    cy.server()

    cy.route({
      method: 'GET',
      url: Cypress.env('baseSearchUrl').replace('{searchTerm}', '"six"'),
      response: 'fixture:six_search_results.json'
    })

    cy.fixture('six_search_results.json').as('six_search_results')

    cy.visit('/search/"six"')
  })

  describe('Add & Remove', function () {
    it('can add & remove 1 from the queue', function () {
      // Add to queue & go to queue queue
      cy.get('[data-queue=add]:first').click()
      cy.get('button').contains('<').click()

      // Verify 1 result in queue list
      cy.get('[data-item-type=queue]').should('have.length', 1)

      // Click remove queue button
      cy.get('[data-queue=remove]:first').click()

      // Verify its removed
      cy.get('[data-item-type=queue]').should('not.exist')
    })

    it('can add & remove many from the queue', function () {
      // Click all add to queue buttons & go to queue page
      cy.get('[data-queue=add]').click({ multiple: true })
      cy.get('button').contains('<').click()

      cy.get('[data-item-type=queue]').should('have.length', this.six_search_results['@odata.count'])

      // Click all the remove buttons
      cy.get('[data-queue=remove]').click({ multiple: true })

      // Verify its removed
      cy.get('[data-item-type=queue]').should('not.exist')
    })
  })

  describe('Drag To Sort', function () {
    function moveQueueItem (selector, x, y) {
      cy.get(selector)
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: x, clientY: y })
        .trigger('mouseup', {force: true})
    }

    beforeEach(function () {
      // Click all add to queue buttons & go to queue page
      cy.get('[data-queue=add]').click({ multiple: true })
      cy.get('button').contains('<').click()
    })

    it.skip('can drag queue item down', function () {
      moveQueueItem('[data-queue=drag]:first', 800, 600)
    })

    it.skip('can drag queue item up', function () {

    })
  })
})
