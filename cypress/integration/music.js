/// <reference types="Cypress" />

describe('Now Playing', () => {

    it('Currently Playing Justin Bieber', () => {

        cy.visit('https://www.capitalfm.com/')

        cy.get('button').contains('ACCEPT').click()
        
        cy.get('[class="now_playing_card"]')
        .within(() =>
        {
            cy.get('[class="track__track-info"]')
            .within(() =>
            {
                cy.contains('Now Playing')
                cy.get('[class="track"]').contains(' Love Yourself ')
                cy.get('[class="artist"]').contains(' Justin Bieber ')
            })
        })
    })

    it('Recently played Justin Bieber', () => {

        cy.visit('https://www.capitalfm.com/')

        cy.get('button').contains('ACCEPT').click()
        
        cy.get('[class="now_playing_card"]')
        .within(() =>
        {
            cy.get('[class="track recently_played_track no_link"]')
            .within(() =>
            {
                cy.get('[class="track"]').contains(' Love Yourself ')
                cy.get('[class="artist"]').contains(' Justin Bieber ')
                cy.get('[class="apple_music"]')
                .within(() =>
                {
                    cy.get('[class="last_played"]').contains('3 minutes ago')
                })
            })
        })
    })
})
        
        
