describe('user login', () =>{
    beforeEach (() => {
        cy.visit('https://dogs.origamid.dev/')
    
    }) 

    it('register user', () => {
            
        cy.contains('a', 'Login / Criar').click();
        cy.contains('a', 'Cadastro').click();
        cy.get('input[name="username"]').type('debnl');
        cy.get('input[name="email"]').type('deb@debnl2.com');
        cy.get('input[name="password"]').type('123456789');
        cy.contains('button', 'Cadastrar').click();
    })

    it('user login using a just created account', () => {

        cy.contains('a', 'Login / Criar').click();
        cy.get('input[name="username"]').type('debnl');
        cy.get('input[name="password"]').type('123456789');
        cy.contains('button', 'Entrar').click();
        cy.contains('a', 'href="/conta"').should('be.visible');


        
    });

})