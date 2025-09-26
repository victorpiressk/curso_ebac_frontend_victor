/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    })

    it('Deve levar o usuário atá o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formuário', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()

        cy.get('input[name="nome-completo"]').type('Victor Pires')
        cy.get('input[name="email"]').type('victor@teste.com')
        cy.get('input[name="telefone"]').type('11 12345 6789')
        cy.get('input[name="endereco"]').type('Rua teste, bairro teste, teste - tst')
        cy.get('#windows').check()

        cy.get('select[name="escolaridade"]').select('outros')

        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})
