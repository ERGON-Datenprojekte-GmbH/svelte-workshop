context('Lesson 6', () => {
    before(() => {
        cy.visit('/#/6');
    });

    it('div "items" gets filled with values from "getData()"', () => {
        cy.get('#items p').eq(0).should('have.text', '1');
        cy.get('#items p').eq(1).should('have.text', '2');
        cy.get('#items p').eq(2).should('have.text', '3');
    });

    it('div with class "flyout" gets moved to the body element', () => {
        cy.get('.box .flyout').should('not.exist');
        cy.get('body .flyout').should('be.visible');
    });

    it('the height of the "intro" div gets set to the variable "height"', () => {
        cy.get('.intro')
            .first()
            .then((el) => {
                let h = el.innerHeight()!.toFixed(0); // for HTMLElement you can use: el.getBoundingClientRect().height.toFixed(0)
                cy.get('#height').should('have.text', 'Intro-Box height: ' + h);
            });
    });
});
