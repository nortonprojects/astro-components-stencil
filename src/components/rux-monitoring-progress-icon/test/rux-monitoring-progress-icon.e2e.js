describe('Monitoring Progress Icon', () => {
    beforeEach(() => {
        cy.visitStory(
            'components-monitoring-progress-icon--monitoring-progress-icon'
        )
    })
    it('renders', async () => {
        cy.get('rux-monitoring-progress-icon').should('have.class', 'hydrated')
    })
})
