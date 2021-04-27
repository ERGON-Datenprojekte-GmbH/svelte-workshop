context('Lesson 2', () => {
    before(() => {
        cy.visit('/#/2');
    });

    it('button with id "incBtn" shows the variable "number" at the beginning', () => {
        cy.get('#incBtn').should('contain.text', '0');
    });

    it('click on button with id "incBtn" shows next number on button', () => {
        cy.get('#incBtn').click().should('contain.text', '1');
        cy.get('#incBtn').click().should('contain.text', '2');
    });

    it('click on button with id "textBtn" shows the text "Hello" - use function changeButtonText', () => {
        cy.get('#textBtn').click().should('contain.text', 'Hello');
    });

    it('mouse movement in div with id "hover-area" changes position text in div', () => {
        cy.get('#hover-area').trigger('mousemove').should('not.contain.text', '0 / 0');
    });
});
