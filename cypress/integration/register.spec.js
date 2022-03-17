describe('register user', () =>{
    beforeEach (() => {
        cy.visit('https://dogs.origamid.dev/')
    
    })
        
        const usuarios = require('../fixtures/users.json');
        usuarios.forEach(user => { 

            it(`register new user ${user.userName} `, () => {
                cy.contains('a', 'Login / Criar').click();
                cy.contains('a', 'Cadastro').click();
                cy.get('input[name="username"]').type(user.userName);
                cy.get('input[name="email"]').type(user.email);
                cy.get('input[name="password"]').type(user.password);
                cy.contains('button', 'Cadastrar').click();
        
        
            });
        })

        it('verify email already used message', () => {
            
            cy.contains('a', 'Login / Criar').click();
            cy.contains('a', 'Cadastro').click();
            cy.get('input[name="username"]').type('debnl');
            cy.get('input[name="email"]').type('deb@debnl2.com');
            cy.get('input[name="password"]').type('123456789');
            cy.contains('button', 'Cadastrar').click();
            cy.contains('p', 'Email já cadastrado').should('be.visible');

            
            
        });

        it('verify dados incompletos message', () => {

            cy.contains('a', 'Login / Criar').click();
            cy.contains('a', 'Cadastro').click();
            cy.contains('button', 'Cadastrar').click();
            cy.contains('p', 'Dados incompletos').should('be.visible');

            
        });

        it('verify preencha um valor message', () => {

            cy.contains('a', 'Login / Criar').click();
            cy.contains('a', 'Cadastro').click();
            cy.get('input[name="username"]').click();
            cy.contains('button', 'Cadastrar').click();
            cy.contains('p', 'Dados incompletos').should('be.visible');
            
        });
        

})