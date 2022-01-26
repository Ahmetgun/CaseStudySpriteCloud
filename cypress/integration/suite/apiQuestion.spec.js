/// <reference types="cypress" />


describe('CaseStudyAPI', function () {
    let testData
    before(function () {
        cy.fixture("testDataAPI").then(function (data) {
            testDataAPI = data
        })
    })


    it('TC1: Add new pet into the store with POST request', function () {
        cy.request({
            method: "POST",
            url: testDataAPI.postRequest,
            body: {
                "id": testDataAPI.petID,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": testDataAPI.petName,
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
            expect(response.body.name).equal(testDataAPI.petName)
        })

    })

    it('TC2: Retrieve newly added pet with GET request', function () {
        cy.request({
            method: "GET",
            url: testDataAPI.getRequest + testDataAPI.petID,
            retryOnStatusCodeFailure: true

        }).then(function (response) {
            expect(response.body.id).equal(testDataAPI.petID)
        })
    })

    it('TC3: Update the pet with PUT Request', function () {
        cy.request({
            method: "PUT",
            url: testDataAPI.postRequest,
            body: {
                "id": testDataAPI.petID,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": testDataAPI.updatedPetName,
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
            expect(response.body.name).equal(testDataAPI.updatedPetName)
        })
    })

    it('TC4: Delete the pet with DELETE Request', function () {
        cy.request({
            method: "DELETE",
            url: testDataAPI.getRequest + testDataAPI.petID
        }).then(function (response) {
            expect(response.body).to.deep.equal({
                "code": 200,
                "type": "unknown",
                "message": String(testDataAPI.petID)
            })
        })
    })

})