
describe("projet trello", () => {
    it("Login", () => {
      cy.visit("https://trello.com");
      cy.contains("Log in").click();
  
      // LOGIN
      cy.origin("https://id.atlassian.com", () => {
        cy.get("#username").type("ryantheap@gmail.com");
        cy.get("#login-submit").click();
        cy.get("#password").type("Wcstrello.33");
        cy.get("#login-submit").click();
      });
  
        cy.get('[href="/b/Ym8HTYlp/wcs-projet-trello"]').click();
        cy.wait(3000);
        cy.get(':nth-child(1) > [data-testid="trello-card"] > .amUfYqLTZOvGsn > [data-testid="card-name"]').drag('[data-list-id="6657215ecc4df39e336a013d"] > [data-testid="list"] > [data-testid="list-footer"] > [data-testid="list-add-card-button"]')
      })  
      });
   
    
