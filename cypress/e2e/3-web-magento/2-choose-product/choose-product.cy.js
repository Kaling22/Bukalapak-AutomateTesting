describe('Verify Magento choose product Functionality ', () => {
    it('Successfully choose view product', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
    })

    it('Successfully choose product with size', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-167').click
        cy.contains('s')
        cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
      })

      it('Successfully choose product with size and color', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-167').click()
        cy.get('#option-label-color-93-item-50').click().should('have.class', 'option-label="Blue"').click()
        cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
      })
})
  