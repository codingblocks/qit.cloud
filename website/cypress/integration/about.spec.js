describe('About', function () {
  function navigateToMainFromAbout () {
    cy.get('[data-nav=main]').click()
  }

  beforeEach(function () {
    cy.visit('/')
  })

  it('can be navigated to from the logo', function () {
    cy.get('[data-nav=about]').click()
    navigateToMainFromAbout()
  })

  it('can be navigated to from the URL', function () {
    cy.visit('/about')
    navigateToMainFromAbout()
  })
})
