// Written with help from this guide: https://www.thisdot.co/blog/testing-web-components-with-cypress-and-typescript

describe('Main App Web Component', () => {
  beforeEach(() => {
    const url = 'http://localhost:8000'
    cy.visit(url)
  })

  it('should exist in markup', () => {
      // Use .shadow() to get access to the shadow dom
      cy.get('main-app')
        .shadow()
  })

  describe('Post Listing Web Component', () => {
    it('should exist in markup', () => {
      cy.get('main-app')
        .shadow()
        .find('post-listing')
    });
    
    it('should display Posts H1 header', () => {
      cy.get('main-app')
        .shadow()
        .find('post-listing')
        .shadow()
        .find('h1')
        .should('contain.text', 'Posts')
    })
  })

  describe('Post Detail Web Component', () => {
    it('should exist in markup', () => {
      cy.get('main-app')
        .shadow()
        .find('post-listing')
        .shadow()
        .find('post-detail')
    });

    it('should contain Post Title: for each post', () => {
      cy.get('main-app')
        .shadow()
        .find('post-listing')
        .shadow()
        .find('post-detail')
        .shadow()
        .find('li')
        .each((item, i) => {
          cy.wrap(item)
            .find('strong')
            .should('contain.text', 'Post Title:')
        })
    })
  })

  describe('Author Web Component', () => {
    it('should exist in markup', () => {
      cy.get('main-app')
        .shadow()
        .find('post-listing')
        .shadow()
        .find('post-detail')
        .shadow()
        .find('author-detail')
    })

    it('should be hidden by default', () => {
      cy.get('main-app')
        .shadow()
        .find('post-listing')
        .shadow()
        .find('post-detail')
        .shadow()
        .find('author-detail')
        .shadow()
        .should('have.text', '')
    })

    it('should display author when post is clicked', () => {
      const postDetail = cy.get('main-app')
                        .shadow()
                        .find('post-listing')
                        .shadow()
                        .find('post-detail')
                        .shadow()
                        .find('div')
                        .first()
    
      postDetail.click()

      postDetail.find('author-detail')
                .shadow()
                .contains('Leanne Graham')
    })
  })
})
