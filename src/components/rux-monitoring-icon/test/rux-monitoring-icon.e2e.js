describe('Monitoring Icon', () => {
    beforeEach(() => {
        cy.visitStory('components-monitoring-icon--default-story')
    })
    it('renders', async () => {
        cy.get('rux-monitoring-icon').should('have.class', 'hydrated')
    })
})
