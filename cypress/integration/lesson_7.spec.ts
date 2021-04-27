context('Lesson 7', () => {
    before(() => {
        cy.visit('/#/7');
    });

    it('Box component shows "myText" variable', () => {
        cy.get('.box').should('have.text', 'Hey!');
        cy.contains('change text').click();
        cy.get('.box').should('have.text', 'Bla');
    });

    it('click on Box calls function "changeText"', () => {
        cy.get('.box').click();
        cy.get('.box').should('have.text', 'Bla');
    });
});
