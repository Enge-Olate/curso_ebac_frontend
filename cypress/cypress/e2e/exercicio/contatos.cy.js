///<reference types="cypress" />


describe('Deve carregar à página e verificar se tem título', ()=>{
    beforeEach(()=>{
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.title().should('not.be.empty')
    })
    
    it('Deve adicionar um novo contato', () => {
      
      cy.get('input[placeholder="Nome"]').type('José');
      cy.get('input[placeholder="Telefone"]').type('3599341133');
      cy.get('input[placeholder="E-mail"]').type('jose@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('José').should('exist');
      cy.contains('3599341133').should('exist');
      cy.contains('jose@example.com').should('exist');
    });

    it('Deve adicionar um novo contato', () => {
      
      cy.get('input[placeholder="Nome"]').type('Yoda');
      cy.get('input[placeholder="Telefone"]').type('3599114433');
      cy.get('input[placeholder="E-mail"]').type('yoda@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Yoda').should('exist');
      cy.contains('3599114433').should('exist');
      cy.contains('yoda@example.com').should('exist');
    });
     it('Deve editar o segundo contato na lista', () => {
        cy.wait(1000);

        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('input[placeholder="Nome"]').clear().type('Cruzeiro');
        cy.get('input[placeholder="E-mail"]').clear().type('francisco@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
        
        cy.contains('button', 'Salvar').click();
        
        cy.contains('Cruzeiro').should('exist');
        cy.contains('francisco@example.com').should('exist');
        cy.contains('1234567890').should('exist');
    });
     it('Deve remover o segundo contato na lista', () => {
        cy.wait(1000);

 
        cy.on('window:confirm', () => true);

     
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click();

 
        cy.wait(1000);
        cy.contains('Nome do Contato').should('not.exist');
    });

})
        