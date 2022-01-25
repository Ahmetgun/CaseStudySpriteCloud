/// <reference types="cypress" />

class HomePage {

    navigateToHomePage(url) {
        cy.visit(url)
    }

    navigateToElementsPage() {
        cy.get(".card-body").contains("Elements").click()
        cy.url().should('include', '/elements')
    }

    navigateToBookStorePage() {
        cy.get(".card-body").contains("Book Store Application").click()
        cy.url().should('include', '/books')
    }

    navigateToFormsPage() {
        cy.get(".card-body").contains("Forms").click()
        cy.url().should('include', '/forms')
    }

    
}

export default HomePage