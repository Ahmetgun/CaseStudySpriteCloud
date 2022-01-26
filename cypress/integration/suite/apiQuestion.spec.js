/// <reference types="cypress" />


describe('CaseStudyAPI', function () {

    it('TC1: Add new pet into the store with POST request', function () {
        cy.request({
            method: "POST",
            url: "v2/pet",
            body: {
                "id": 1287463,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "daisy",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            },
            headers: {
                "content-type": "application/json"
            }
        }).then(function (response) {
            expect(response.body.name).equal("daisy")
        })

    })

    it('TC2: Retrieve newly added pet with GET request', function () {
        cy.request({
            method: "GET",
            url: "v2/pet/1287463",
            retryOnStatusCodeFailure: true

        }).then(function (response) {
            expect(response.body.id).equal(1287463)
        })
    })

    it('TC3: Update the pet with PUT Request', function () {
        cy.request({
            method: "PUT",
            url: "v2/pet",
            body: {
                "id": 1287463,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "lilly",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            },
            headers: {
                "content-type": "application/json"
            }
        }).then(function (response) {
            expect(response.body.name).equal("lilly")
        })
    })

    it('TC4: Delete the pet with DELETE Request', function () {
        cy.request({
            method: "DELETE",
            url: "v2/pet/1287463"
        }).then(function (response) {
            expect(response.body).to.deep.equal({
                "code": 200,
                "type": "unknown",
                "message": "1287463"
            })
        })
    })

})