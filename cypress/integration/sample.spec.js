// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {

  // Skip
  xit('Does not do much!', () => {
    expect(true).to.equal(false)
  })

  it('finds the main-app web component', () => {
    cy.visit('http://localhost:8000')

    cy.get('main-app')
  })

  it('finds the post-listing web component', () => {
    cy.visit('http://localhost:8000')

    cy.get('main-app').shadow().find('post-listing')
  });

  it('finds post-detail web components', () => {
    cy.visit('http://localhost:8000')

    cy.get('main-app').shadow()
      .find('post-listing').shadow()
      .find('post-detail')
  });

  // Skip
  xit('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
})
