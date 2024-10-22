describe('Test Intercept OrangeHRM', () => {
    it('Test Intercept Login Valid data', () => {
        cy.visit('/')
      
        cy.get('input[placeholder="Username"]').type("Admin")

        cy.get('input[placeholder="Password"]').type("admin123");

        cy.intercept('Get', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')

        cy.get('button[type="submit"]').click()

        cy.wait('@actionSummary')

    })

    it('Test Login Invalid data', () => {
        cy.visit('/')
    
        cy.get('input[placeholder="Username"]').type("Admin")

        cy.get('input[placeholder="Password"]').type("wrongpassword")

        cy.intercept('Get', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages')

        cy.get('button[type="submit"]').click()

        cy.get('div[role="alert"]')
            .should('be.visible')

        cy.wait('@messages')
    })

    it('Verfikasi lupa password', () => {
        cy.visit('/')
        
        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"').click()

        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestResetPassword').as('req')

        
        cy.get('input[placeholder="Username"]').type("Admin")
        
        cy.get('button[type="submit"]').click()
        
        cy.contains('successfully')
          .should('be.visible')
        
        cy.wait('@req')
    })

})