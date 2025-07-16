describe('Cypress Task #3', () => {
 it('Test Case 1: Add all watches with price > 55 to cart', () => {
    cy.visit('https://magento.softwaretestingboard.com/');

    // افتحي قائمة Gear > Watches
    cy.get('a[href*="gear"]').contains('Gear').click();
    cy.get('a[href*="watches"]').contains('Watches').click();

    // غيّري طريقة العرض إلى List
    cy.get('.mode-list').click();

    // مرّي على كل ساعة وإذا سعرها > 55 أضيفيها للسلة
    cy.get('.product-item').each(($el) => {
      cy.wrap($el).find('.price').invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        if (price > 55) {
          cy.wrap($el).find('button[title="Add to Cart"]').click();
          cy.wait(500); // استراحة بسيطة بين كل عملية
        }
      });
    });
  });

  it("Test Case 2: Print all categories in 'New In Women' section", () => {
    cy.visit('https://magento.softwaretestingboard.com/');

    // افتحي What's New
    cy.get('a[href*="what-is-new"]').click();

    // روحي على قسم النساء
    cy.get('a[href*="women"]').contains('Women').click();

    // افتحي فلتر التصنيفات
    cy.get('.filter-options-title').contains('Category').click();

    // انتظري الفلتر ليظهر واطبعي التصنيفات
    cy.get('.filter-options-content')
      .should('be.visible')
      .find('a')
      .each(($cat) => {
        cy.wrap($cat).invoke('text').then((text) => {
          cy.log('Category: ${text.trim()}');
        });
      });
  });
});
