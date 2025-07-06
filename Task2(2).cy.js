describe('Add product to wishlist', () => {
  it('should add the product to the wishlist and take a full-page screenshot', () => {
    cy.visit('https://magento.softwaretestingboard.com/');

    // اذهب إلى منتج معين
    cy.get('.product-item-link').first().click();

    // أضف المنتج إلى قائمة الأمنيات
    cy.get('.action.towishlist').click();

    // تحقق من أن المنتج أضيف بنجاح
    cy.contains('You added').should('be.visible');

    // التقط لقطة شاشة للصفحة الكاملة
    cy.screenshot('wishlist_full_page', { capture: 'fullPage' });
  });
});