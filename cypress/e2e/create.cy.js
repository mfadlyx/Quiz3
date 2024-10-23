/// <reference types="cypress" />

describe('Reqres API Testin', () => {
    it('Get API Testing Create', () => {

        cy.request('POST', 'https://reqres.in/api/users')
            .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body).to.not.be.null
            })
    })
})