describe('List Posts', () => {
    before(() => {
        cy.server();
        cy.route('GET', '**/api/posts/*', 'fixture:GET-posts.json');
        cy.route('OPTIONS', '**/api/posts/*', 'fixture:OPTIONS-posts');
        cy.visit('http://localhost:4200')
    });

    it('Should show all the posts', () => {
        cy.get('mat-expansion-panel').should('have.length', 2);
    });
})
