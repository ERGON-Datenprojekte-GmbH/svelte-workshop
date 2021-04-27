context('Lesson 8', () => {
    before(() => {
        cy.visit('/#/8');
    });

    it('div "infoText" contains inital value from info-store', () => {
        cy.get('#infoText').should('have.text', '-');
    });

    it('click on button "change" changes info-store value to "Hello"', () => {
        cy.get('#change').click();
        cy.get('#infoText').should('have.text', 'Hello');
    });
});
