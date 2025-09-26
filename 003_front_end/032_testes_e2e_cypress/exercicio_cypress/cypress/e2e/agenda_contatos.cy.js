/// <reference types="cypress" />

describe('Testes página Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve incluir um contato', () => {
        cy.get('input[type="text"]').type('Victor Pires')
        cy.get('input[type="email"]').type('victor@teste.com')
        cy.get('input[type="tel"]').type('84123456789')
        cy.get('.adicionar').click()

        cy.get('.contato').should('have.length', 3)
    })

    it('Deve alterar o primeiro contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Gian Souza')
        cy.get('input[type="email"]').clear().type('gian@ebac.com')
        cy.get('input[type="tel"]').clear().type('12912345678')
        cy.get('.alterar').click()

        cy.get('ul li').first().should('contain', 'Gian Souza')
        
    })

    it('Deve remover o ultimo contato', () => {
        cy.get('.delete').last().click()

        cy.get('.contato').should('have.length', 2)
    })
})