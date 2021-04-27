context('Lesson 3', () => {
    before(() => {
        cy.visit('/#/3');
    });

    it('"textInput" changes "text"', () => {
        cy.get('#textInput').clear().type('hey!');
        cy.get('#text').should('contain.text', 'hey!');
    });

    it('inputs "number1" and "number2" are bound to variable "number"', () => {
        cy.get('#number1').clear().type('5');
        cy.get('#number2').should('have.value', '5');
    });

    it('"checkbox" is bound to variable "isChecked"', () => {
        cy.get('#checkbox').click();
        cy.get('#checkedText').should('contain.text', 'Checked: true');
    });

    it('"select" is bound to variable "selected"', () => {
        cy.get('#select').select('2');
        cy.get('#selectedText').should('contain.text', 'Selected: 2');
    });
});
