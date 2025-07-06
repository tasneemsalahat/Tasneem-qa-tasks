describe('Submit Product Review', () => {
  it('should allow the user to submit a review on the product page', () => {
    // 1. زيارة صفحة منتج حقيقية من الموقع
    cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html');

    // 2. النقر على زر "Add Your Review"
    cy.contains('Add Your Review').click();

    // 3. تعبئة الحقول المطلوبة
    cy.get('#summary_field').type('Great product!');
    cy.get('#review_field').type('The quality is really good and the material is soft.');
    cy.get('#nickname_field').type('Tasnime');

    // 4. الضغط على زر "Submit"
    cy.get('button.action.submit.primary').click();

    // 5. التحقق من ظهور رسالة النجاح
    cy.contains('You submitted your review for moderation.').should('be.visible');
  });
});
