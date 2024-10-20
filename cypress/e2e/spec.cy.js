describe('Test Login OrangeHRM', () => {
  it('Verifikasi login valid data', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin123")    
    cy.get('button[type="submit"]').click({force:true})
  })


  it('Verifikasi login invalid data', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("wrongpassword")    
    cy.get('button[type="submit"]').click({force:true})

    cy.get('div[role="alert"]')
      .should('be.visible')
  })

  it('Verifikasi login tanpa mengisi password', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type(" ")    
    cy.get('button[type="submit"]').click({force:true})

    cy.contains('Require')
      .should('be.visible')
  })

  it('Verifikasi login tanpa mengisi username', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type(" ")
    cy.get('input[placeholder="Password"]').type("admin123")    
    cy.get('button[type="submit"]').click({force:true})

    cy.contains('Require')
      .should('be.visible')
  })

  it('Verfikasi lupa password', () => {
    cy.visit('/')
    cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"').click({force:true})
    
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('button[type="submit"]').click({force:true})
    cy.contains('successfully')
      .should('be.visible')
  })
})
