/// <reference types="cypress" />


import HomePage from "../../support/pageObject/HomePage"
import ElementsPage from "../../support/pageObject/ElementsPage"


describe('CaseStudyUI', function () {
    const hp = new HomePage()
    const ep = new ElementsPage()
    let testData
    

    before(function () {
        cy.fixture("testData").then(function (data) {
            testData = data
        })
    })

    beforeEach(function () {
        cy.viewport(1500, 1000)
        hp.navigateToHomePage(testData.demoURL)
        
    })

    it('TC1: Submit Text Box Form', function () {
        hp.navigateToElementsPage()
        ep.submitTextBoxFrm(testData.fullName, testData.email, testData.currentAddress)            
    })

    it('TC2: Check whether user can search and select the book', function() {
        hp.navigateToBookStorePage()
        ep.searchBook(testData.bookName)
    })

    it('TC3: Check whether user can fill the student registration form', function() {
        hp.navigateToFormsPage()
        ep.fillStudentRegistrationForm(testData.credentialType)
    })



})