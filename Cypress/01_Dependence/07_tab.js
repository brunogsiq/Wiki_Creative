/*
Step 1: Install Cypress Tab Key Plugin
npm install -D cypress-plugin-tab
install Cypress tabs key plugin

Step 2: Add Cypress Tab Plugin Package In Index.js
Include the package in index.js situated in this path cypress/support/index.js

Note: if you are using version Cypress 10 or above add it to e2e.js. For typescript it will be e2e.ts.

require("cypress-plugin-tab");
Add Cypress Tab Plugin Package In Index file

Step 3: Use tab() command
Let us Now Witness This Plugin In Action

it('Type Username And Password',()=>{
    cy.visit('https://www.programsbuzz.com/user/login')
    
    cy.get('form').within(()=>{
        cy.xpath("//input[@id='edit-name']").type('Rataalada').tab().type('mloo')
    })
})
*/