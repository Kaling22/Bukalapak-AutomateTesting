const { text } = require("stream/consumers")

describe('Verify Magento choose product Functionality ', () => {
    it('Success choose product', () => {
      cy.visit('https://magento.softwaretestingboard.com/').should('have.text', 'LUMA')
      cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    })
})
  