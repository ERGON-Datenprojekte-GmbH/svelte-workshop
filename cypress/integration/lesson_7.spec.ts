context('Lesson 7', () => {
    before(() => {
        cy.visit('/#/7');
    });

    it('Box component shows "myText" variable via prop', () => {
        cy.get('.box').should('have.text', 'Hey!');
        cy.contains('change text').click();
        cy.get('.box').should('have.text', 'Bla');
    });

    it('click on Box calls function "changeText"', () => {
        cy.get('.box').click();
        cy.get('.box').should('have.text', 'Bla');
    });

    it('Box has the default title (attribute) "This is a box"', () => {
        cy.get('.box').should('have.attr', 'title', 'This is a box');
    });
});
