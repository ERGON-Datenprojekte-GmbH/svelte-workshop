context('Lesson 4', () => {
    before(() => {
        cy.visit('/#/4');
    });

    it('only show "Banana" if variable "show" is false', () => {
        cy.get('#show').should('contain.text', 'Banana');
        cy.get('#show').should('not.contain.text', 'Monkey');
    });

    it('only show "Monkey" if variable "show" is true', () => {
        cy.get('#toggle').click();
        cy.get('#show').should('not.contain.text', 'Banana');
        cy.get('#show').should('contain.text', 'Monkey');
    });

    it('render all items in a <p>-Paragraph', () => {
        cy.get('#addItem').click();
        cy.get('p').contains('One').should('be.visible');
        cy.get('p').contains('Two').should('be.visible');
        cy.get('p').contains('Three').should('be.visible');
        cy.get('p').contains('NEW').should('be.visible');
    });

    it('div "items" has class "colorful" if "items" has more than 3 entries', () => {
        cy.get('#addItem').click();
        cy.get('#items').should('have.css', 'background-color', 'rgb(107, 65, 199)');
    });
});
