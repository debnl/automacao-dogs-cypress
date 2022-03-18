describe('register user', () =>{
    beforeEach (() => {
        cy.visit('https://dogs.origamid.dev/')
    
    })
    
    it('verify login/register options', () => {
        cy.get('a[href="/login"]').should('be.visible');
    });

    it('verify if images are being displayed', () => {
        cy.get('img[src="https://dogsapi.origamid.dev/wp-content/uploads/2020/07/freddie-marriage-w39PTDxKiK8-unsplash-1-1000x1000.jpg"]').should('be.visible');
    });
    
    it('get into a photo page', () => {
        cy.get('img[src="https://dogsapi.origamid.dev/wp-content/uploads/2020/07/freddie-marriage-w39PTDxKiK8-unsplash-1-1000x1000.jpg"]').click();
        cy.contains('a', 'Joel').click();
        cy.url().should('include', '/foto/239');


    })

    it('get into the profile that posted the photo', () => {
        cy.get('img[src="https://dogsapi.origamid.dev/wp-content/uploads/2020/07/freddie-marriage-w39PTDxKiK8-unsplash-1-1000x1000.jpg"]').click();
        cy.contains('a', 'Joel').click();
        cy.contains('a', '@', 'cat').click();
        cy.url().should('include', '/perfil/cat');

    });

})