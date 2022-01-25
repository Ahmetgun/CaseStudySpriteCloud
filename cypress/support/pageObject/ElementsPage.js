/// <reference types="cypress" />

class ElementsPage {

    submitTextBoxForm(username, email, currentAddress) {
        cy.log("Click the Text Box")
        cy.get(".text").contains("Text Box").click()
        cy.url().should('include', '/text-box')
        cy.log("Enter your username")
        cy.get("#userName").type(username)
        cy.log("Enter your email")
        cy.get("#userEmail").type(email)
        cy.log("Enter your current address")
        cy.get("#currentAddress").type(currentAddress)
        cy.log("Click the submit button")
        cy.get("#submit").click()
        cy.log("Control the form")
        cy.get("#name").should("have.text", "Name:" + username)
        cy.get("#email").should("have.text", "Email:" + email)
        cy.get(".mb-1[id='currentAddress']").should("have.contain.text", currentAddress)
    }

    searchBook(bookName) {
        cy.log("Click the Book Store")
        cy.get(".text").contains("Book Store").click()
        cy.url().should('include', '/books')
        cy.log("Search the book")
        cy.get("#searchBox").type(bookName)
        cy.wait(1000)
        cy.get(".mr-2").should("be.visible").click()
        cy.get("#title-wrapper").should("have.contain.text", bookName)

    }

    fillStudentRegistrationForm(credentialType) {
        cy.log("Click the Practice Form")
        cy.get(".text").contains("Practice Form").click()
        cy.log("Fill the student form with credentials")
        for(var field of Object.keys(credentialType)) {
        switch(field) {
            case "firstName": cy.get("#firstName").type(credentialType.firstName)
            break;
            case "lastName": cy.get("#lastName").type(credentialType.lastName)
            break;
            case "email": cy.get("#userEmail").type(credentialType.email)
            break;
            case "gender": 
                if(credentialType.gender == "male") {
                    cy.get("[for='gender-radio-1']").click()
                }
                else if(credentialType.gender == "female") {
                    cy.get("[for='gender-radio-2']").click()
                }
                else if(credentialType.gender == "other"){
                    cy.get("[for='gender-radio-3']").click()
                }
            break;
            case "phone": cy.get("#userNumber").type(credentialType.phone)
            break;
            case "dateOfBirth": 
                cy.get("#dateOfBirthInput").click()
                cy.log("Select month")
                cy.get(".react-datepicker__month-select").select(credentialType.dateOfBirth.month)
                cy.log("Select year")
                cy.get(".react-datepicker__year-select").select(credentialType.dateOfBirth.year)
                cy.log("Select day")
                cy.get(".react-datepicker__week").contains(credentialType.dateOfBirth.day).click()
            break;
            case "subject": 
                cy.get("#subjectsContainer").click()
                cy.get("#subjectsContainer").type(credentialType.subject + '{enter}')
            break;
            case "hobbies":
                for(var col of credentialType.hobbies) {
                    if(col == "Sports") {
                        cy.get("[for='hobbies-checkbox-1']").click() 
                    }
                    else if(col == "Reading") {
                        cy.get("[for='hobbies-checkbox-2']").click() 
                    }
                    else if(col == "Music") {
                        cy.get("[for='hobbies-checkbox-3']").click() 
                    }
            }
            case "curAddress":
                cy.get("#currentAddress").type(credentialType.curAddress)
            break;
        }

     }
     cy.log("Click the submit button")
     cy.get("#submit").click()
     cy.get("#example-modal-sizes-title-lg").should("have.contain.text", "Thanks for submitting the form")
     cy.get("#closeLargeModal").click()
    }
}

export default ElementsPage