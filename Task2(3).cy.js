describe('Add product to compare list', () => {
  it('should add the product to compare list', () => {
    cy.visit('https://magento.softwaretestingboard.com/');

    // اذهب إلى منتج
    cy.get('.product-item-link').first().click();

    // أضف إلى المقارنة
    cy.get('.action.tocompare').click();
    cy.wait(2000);

    // تحقق من ظهور رسالة النجاح
    cy.contains('You added product to the comparison list.');
  });
});

