context('Lesson 5', () => {
    before(() => {
        cy.visit('/#/5');
    });

    it('click on "Add" extends list "items" with an item with the text "NEW"', () => {
        cy.contains('Add').click();
        cy.get('#items p').should('have.length', 3);
        cy.get('#items p').contains('NEW').should('be.visible');
    });

    it('click on a "Change" button changes the text of that item to "CHANGED"', () => {
        cy.get('p button').first().click();
        cy.get('p span').first().should('have.text', 'CHANGED');
    });

    it('click on "Increment" button changes value b and the sum', () => {
        cy.contains('Increment').click();
        cy.get('#sum').should('have.text', 'Sum: 3');
    });
});
