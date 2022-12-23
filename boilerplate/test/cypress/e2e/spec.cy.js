describe('Test', () => {
  it('Main Test', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[placeholder="Your name"]').type('abc');
    cy.get('input[placeholder="City where you live"]').type('dsf');
    cy.get('input[placeholder="Your hobbies"]').type('jhk');
    cy.get('input[placeholder="Your college name"]').type('nbm');
    cy.get('button').contains('Let me know you!!').click();
    cy.get('button').contains('Hide Please')
  })
})