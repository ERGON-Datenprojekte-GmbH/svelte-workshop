context('Lesson 1', () => {
    before(() => {
        cy.visit('/#/1');
    });

    it('show variable "text" in "block-1"', () => {
        cy.get('[data-test="block-1"]').should('contain.text', 'Hello');
    });

    it('"block-1" the right class "colorful" from variable "myClass"', () => {
        cy.get('[data-test="block-1"]').should('have.class', 'colorful');
    });

    it('"block-2" shows the sum of "number1" and "number2"', () => {
        cy.get('[data-test="block-2"]').should('have.text', 'Sum: 8');
    });

    it('"block-2" has font-size "fontSize"', () => {
        cy.get('[data-test="block-2"]').should('have.css', 'font-size', '30px');
    });

    it('"block-3" has "text" as the value of the title attribute', () => {
        cy.get('[data-test="block-3"]').should('have.attr', 'title', 'Hello');
    });

    it('show variable "text" in "block-4" in ALL CAPS', () => {
        cy.get('[data-test="block-4"]').should('contain.text', 'HELLO');
    });
});
